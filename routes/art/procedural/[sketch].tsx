import ProcessingSketch from "@islands/ProcessingSketch.tsx";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function SketchPage(props: PageProps) {
  const { sketch } = props.params;
  const sketchUrl = "/sketches/" + sketch + ".js";
  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.2/p5.min.js"
          integrity="sha512-1YMgn4j8cIL91s14ByDGmHtBU6+F8bWOMcF47S0cRO3QNm8SKPNexy4s3OCim9fABUtO++nJMtcpWbINWjMSzQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        >
        </script>
        <script src="https://unpkg.com/chromotome@1.19.1/dist/index.umd.js">
        </script>
      </Head>
      <div class="xl:pt-[10px]">
        <ProcessingSketch sketch={sketchUrl} />
      </div>
    </>
  );
}
