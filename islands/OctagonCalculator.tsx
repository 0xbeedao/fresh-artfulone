import classNames from "@classnames";
import type { JSX } from "preact";
import { useState } from "preact/hooks";

const GOLDEN_RATIO = 1.618034;

type OctagonDimensions = {
  innerFace: number;
  depth: number;
  width: number;
  outerFace: number;
};

type CalculateFunction = (value: number) => OctagonDimensions;

const calculateFromInnerFace: CalculateFunction = (inner) => {
  const depth = inner / GOLDEN_RATIO;
  const width = depth;
  const outerFace = inner + 2 * width;
  return { innerFace: inner, depth, width, outerFace };
};

const calculateFromDepth: CalculateFunction = (depth) => {
  const innerFace = depth * GOLDEN_RATIO;
  const width = depth;
  const outerFace = innerFace + 2 * width;
  return { innerFace, depth, width, outerFace };
};

const calculateFromWidth: CalculateFunction = (width) => {
  const depth = width;
  const innerFace = depth * GOLDEN_RATIO;
  const outerFace = innerFace + 2 * width;
  return { innerFace, depth, width, outerFace };
};

const calculateFromOuterFace: CalculateFunction = (outer) => {
  const depth = outer / (GOLDEN_RATIO + 2);
  const width = depth;
  const innerFace = depth * GOLDEN_RATIO;
  return { innerFace, depth, width, outerFace: outer };
};

const calculationFunctions: Record<string, CalculateFunction> = {
  innerFace: calculateFromInnerFace,
  depth: calculateFromDepth,
  width: calculateFromWidth,
  outerFace: calculateFromOuterFace,
};

const calculateTotalWidth = (face: number) => {
  return face / Math.cos(22.5 * Math.PI / 180);
};

// Volume calculations
const calculateVolumes = (values: OctagonDimensions) => {
  // Convert inches to cm for calculations
  const inToCm = 2.54;

  // Calculate area of outer octagon
  const outerArea = 2 * values.outerFace * values.outerFace *
    (1 + Math.sqrt(2));

  // Calculate area of inner octagon
  const innerArea = 2 * values.innerFace * values.innerFace *
    (1 + Math.sqrt(2));

  // Calculate ring area
  const ringArea = outerArea - innerArea;

  // Calculate volumes
  const volumeInCubicInches = ringArea * values.depth;
  const volumeInCubicCm = volumeInCubicInches * Math.pow(inToCm, 3);

  // Calculate silicone mold volume (adding 1 inch padding all around)
  const moldBoxWidth = calculateTotalWidth(values.outerFace) + 2; // 1 inch padding each side
  const moldBoxDepth = values.depth + 1; // 0.5 inch base + 0.5 inch top
  const moldVolumeCubicInches = moldBoxWidth * moldBoxWidth * moldBoxDepth;
  const moldVolumeCubicCm = moldVolumeCubicInches * Math.pow(inToCm, 3);

  return {
    printVolumeCubicCm: volumeInCubicCm,
    printVolumeCubicInches: volumeInCubicInches,
    moldVolumeCubicCm: moldVolumeCubicCm,
    moldVolumeCubicInches: moldVolumeCubicInches,
  };
};

type Vertex = [number, number, number];

const generateSTL = (values: OctagonDimensions) => {
  // Convert to meters for STL (standard unit)
  const inchesToMeters = 0.0254;
  const innerRadius =
    (values.innerFace / (2 * Math.cos(22.5 * Math.PI / 180))) * inchesToMeters;
  const outerRadius =
    (values.outerFace / (2 * Math.cos(22.5 * Math.PI / 180))) * inchesToMeters;
  const height = values.depth * inchesToMeters;

  // Generate vertices for 8 points of inner and outer octagons
  const vertices: Vertex[] = [];
  const faces: Vertex[] = [];

  // Generate vertices for top and bottom faces
  for (let i = 0; i < 8; i++) {
    const angle = (i * 45) * Math.PI / 180;
    // Inner vertices (0-7 bottom, 8-15 top)
    vertices.push([
      innerRadius * Math.cos(angle),
      innerRadius * Math.sin(angle),
      0,
    ]);
    vertices.push([
      innerRadius * Math.cos(angle),
      innerRadius * Math.sin(angle),
      height,
    ]);
    // Outer vertices (16-23 bottom, 24-31 top)
    vertices.push([
      outerRadius * Math.cos(angle),
      outerRadius * Math.sin(angle),
      0,
    ]);
    vertices.push([
      outerRadius * Math.cos(angle),
      outerRadius * Math.sin(angle),
      height,
    ]);
  }

  // Generate triangles for faces
  // Bottom face
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    faces.push([i * 2, next * 2, (i * 2) + 16]); // Inner to outer
    faces.push([(i * 2) + 16, next * 2, (next * 2) + 16]); // Complete quad
  }

  // Top face
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    faces.push([(i * 2) + 1, (next * 2) + 1, (i * 2) + 17]); // Inner to outer
    faces.push([(i * 2) + 17, (next * 2) + 1, (next * 2) + 17]); // Complete quad
  }

  // Side faces
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    // Inner wall
    faces.push([i * 2, (i * 2) + 1, next * 2]);
    faces.push([next * 2, (i * 2) + 1, (next * 2) + 1]);
    // Outer wall
    faces.push([(i * 2) + 16, (i * 2) + 17, (next * 2) + 16]);
    faces.push([(next * 2) + 16, (i * 2) + 17, (next * 2) + 17]);
  }

  // Generate STL string
  let stl = "solid octagonal_ring\n";

  faces.forEach((face) => {
    const v1 = vertices[face[0]];
    const v2 = vertices[face[1]];
    const v3 = vertices[face[2]];

    // Calculate normal vector
    const dx1 = v2[0] - v1[0];
    const dy1 = v2[1] - v1[1];
    const dz1 = v2[2] - v1[2];
    const dx2 = v3[0] - v1[0];
    const dy2 = v3[1] - v1[1];
    const dz2 = v3[2] - v1[2];

    const nx = dy1 * dz2 - dz1 * dy2;
    const ny = dz1 * dx2 - dx1 * dz2;
    const nz = dx1 * dy2 - dy1 * dx2;

    const length = Math.sqrt(nx * nx + ny * ny + nz * nz);

    stl += `  facet normal ${nx / length} ${ny / length} ${nz / length}\n`;
    stl += "    outer loop\n";
    stl += `      vertex ${v1[0]} ${v1[1]} ${v1[2]}\n`;
    stl += `      vertex ${v2[0]} ${v2[1]} ${v2[2]}\n`;
    stl += `      vertex ${v3[0]} ${v3[1]} ${v3[2]}\n`;
    stl += "    endloop\n";
    stl += "  endfacet\n";
  });

  stl += "endsolid octagonal_ring";

  // Create and download file
  const blob = new Blob([stl], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `octagonal_ring_${values.innerFace}in.stl`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function OctagonCalculator(): JSX.Element {
  const [activeTab, setActiveTab] = useState("dimensions");
  const [selectedDimension, setSelectedDimension] = useState("innerFace");
  const [values, setValues] = useState({
    innerFace: 3.25,
    depth: 3.25 / GOLDEN_RATIO,
    width: 3.25 / GOLDEN_RATIO,
    outerFace: 3.25 + (2 * (3.25 / GOLDEN_RATIO)),
  } as OctagonDimensions);

  const [volumes, setVolumes] = useState(calculateVolumes(values));

  const handleValueChange = (value: string) => {
    const parsedValue = parseFloat(value) || 0;
    const newValues = calculationFunctions[selectedDimension](parsedValue);
    setValues(newValues);
    const newVolumes = calculateVolumes(newValues);
    setVolumes(newVolumes);
  };

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-3xl">
        Octagonal Ring Calculator with Volume
      </h1>
      <div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label>Select dimension to modify:</label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="innerFace"
                  id="innerFace"
                  name="dimension"
                  onChange={() => setSelectedDimension("innerFace")}
                  defaultChecked
                />
                <label htmlFor="innerFace">Inner Face</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="depth"
                  id="depth"
                  name="dimension"
                  onChange={() => setSelectedDimension("depth")}
                />
                <label htmlFor="depth">Depth</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="width"
                  id="width"
                  name="dimension"
                  onChange={() => setSelectedDimension("width")}
                />
                <label htmlFor="width">Width</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="outerFace"
                  id="outerFace"
                  name="dimension"
                  onChange={() => setSelectedDimension("outerFace")}
                />
                <label htmlFor="outerFace">Outer Face</label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label>Enter value (inches):</label>
            <input
              type="number"
              value={values[selectedDimension as keyof OctagonDimensions]}
              onChange={({ target }) => {
                if (target) {
                  handleValueChange((target as HTMLInputElement).value);
                }
              }}
              step="0.125"
              min="0"
              className="max-w-xs pl-2 ml-2"
            />
          </div>

          <div>
            <div>
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveTab("dimensions")}
                    className={classNames(
                      "inline-block px-4 py-2 text-gray-600 rounded shadow",
                      {
                        "bg-purple-600 dark:text-gray-100 text-gray-900":
                          activeTab === "dimensions",
                        "bg-zinc-700 text-zinc-300": activeTab !== "dimensions",
                      },
                    )}
                  >
                    Dimensions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveTab("volumes")}
                    className={classNames(
                      "inline-block px-4 py-2 text-gray-600 rounded shadow",
                      {
                        "bg-purple-600 dark:text-gray-100 text-gray-900":
                          activeTab === "volumes",
                        "bg-zinc-700 text-zinc-300": activeTab !== "volumes",
                      },
                    )}
                  >
                    Volumes
                  </a>
                </li>
              </ul>
            </div>

            {activeTab === "dimensions" && (
              <div className="grid grid-cols-2 gap-2 p-4 rounded-lg bg-slate-50">
                <span className="font-medium">Inner Face:</span>
                <span>{values.innerFace.toFixed(3)} inches</span>

                <span className="font-medium">Depth:</span>
                <span>{values.depth.toFixed(3)} inches</span>

                <span className="font-medium">Width of Ring:</span>
                <span>{values.width.toFixed(3)} inches</span>

                <span className="font-medium">Outer Face:</span>
                <span>{values.outerFace.toFixed(3)} inches</span>

                <span className="font-medium text-slate-600">
                  Inner Total Width:
                </span>
                <span className="text-slate-600">
                  {calculateTotalWidth(values.innerFace).toFixed(3)} inches
                </span>

                <span className="font-medium text-slate-600">
                  Outer Total Width:
                </span>
                <span className="text-slate-600">
                  {calculateTotalWidth(values.outerFace).toFixed(3)} inches
                </span>
              </div>
            )}

            {activeTab === "volumes" && (
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-2 p-4 rounded-lg bg-slate-50">
                  <span className="font-medium col-span-2 text-lg pb-2">
                    3D Print Volume (Master Model):
                  </span>
                  <span className="font-medium">Cubic Centimeters:</span>
                  <span>{volumes.printVolumeCubicCm.toFixed(2)} cm³</span>
                  <span className="font-medium">Cubic Inches:</span>
                  <span>{volumes.printVolumeCubicInches.toFixed(2)} in³</span>

                  <span className="font-medium col-span-2 text-lg pt-4 pb-2">
                    Silicone Mold Volume:
                  </span>
                  <span className="font-medium">Cubic Centimeters:</span>
                  <span>{volumes.moldVolumeCubicCm.toFixed(2)} cm³</span>
                  <span className="font-medium">Cubic Inches:</span>
                  <span>{volumes.moldVolumeCubicInches.toFixed(2)} in³</span>
                </div>

                <div className="text-sm text-slate-500 space-y-1">
                  <p>
                    * 3D print volume is the actual material volume of the ring
                  </p>
                  <p>
                    * Silicone mold volume includes 1 inch padding on all sides
                  </p>
                  <p>* Most 3D print services charge by cm³ of material used</p>
                  <p>
                    * For silicone, add 10% extra to account for waste and
                    spillage
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="text-sm text-slate-500 space-y-1">
            <p>* Using golden ratio (1.618034) between inner face and depth</p>
            <p>* Width is kept equal to depth for balanced proportions</p>
          </div>
          <div class="mt-4">
            <button
              onClick={generateSTL}
              class="bg-purple-600 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg"
            >
              Generate STL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
