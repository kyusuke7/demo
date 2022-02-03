<template>
<div>
  <hr>
  <div>
    <h1> navigator user media </h1>
    <div>
      <button @click.prevent.stop="getCamera()"> get camera </button>
  <p>
  {{result}}
  </p>
    </div>
  </div>

  <hr>
  <div>
    <h1> quagga2 demo </h1>
    <div>
      <div id="cameraArea"> <img v-if="code.length" src="" alt="result" class="resultImg" /> </div>
      <p v-if="code.length" class="getMessage">取得できました</p>
      <p class="resultCode">{{ code }}</p>
      <button @click="startScan">Scan</button>
      <button aria-label="close" @click.prevent.stop="stopScan"> Stop </button>
      <p>{{errq}}</p>
    </div>
  </div>

  <hr>
  <div>
    <h1> html5-qrcode demo </h1>
    <div>
    <qrcode-scanner
    :qrbox="250"
    :fps="10"
    style="width: 500px;"
    @result="onScan"
  />


      <div id="cameraArea2"> <img v-if="code.length" src="" alt="result" class="resultImg2" /> </div>
      <p v-if="false" class="getMessage2">取得できました</p>
      <p class="resultCode">{{ decodedText }}</p>
      <p class="resultCode">{{ decodedResult }}</p>
    </div>
  </div>
</div>
</template>

<script>
// import Vue from 'vue'; // ES6
import Quagga from '@ericblade/quagga2'; // ES6

//import {Html5QrcodeScanner} from "html5-qrcode"
// import {Html5Qrcode} from "html5-qrcode"


export default {
  name: 'HelloWorld',
  components: {
  },
  data: function() {
        return {
      Quagga: null,
      code: "",
      decodedText: "",
      decodedResult: "",
      result: "",
      errq: '',
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getCamera(){
      console.log('aaaaaaaaaaaaaaaaaaa');
      return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia(
          { audio: false, video: true })
          .then((stream) => {
            this.result = 'then: ' + stream;
            // hacky approach to close any active stream if they are
            // active.
            const closeActiveStreams = (stream) => {
              const tracks = stream.getVideoTracks();
              for (const track of tracks) {
                track.enabled = false;
                track.stop();
                stream.removeTrack(track);
              }
            }

            navigator.mediaDevices.enumerateDevices()
              .then((devices) => {
                const results = [];
                for (const device of devices) {
                  if (device.kind === "videoinput") {
                    results.push({
                      id: device.deviceId,
                      label: device.label
                    });
                  }
                }
                closeActiveStreams(stream);
                resolve(results);
              })
              .catch((err) => {
                reject(`${err.name} : ${err.message}`);
              });
          })
          .catch((err) => {
            this.result = 'err:' + err;
            reject(`${err.name} : ${err.message}`);
          });
      });
    },
    startScan() {
      try {
      this.code = "";
      this.initQuagga();
      } catch (e) {
        this.errq = e
      }
    },
    stopScan() {
      this.Quagga.offProcessed(this.onProcessed)
      this.Quagga.offDetected(this.onDetected)
      this.Quagga.stop();
    },
    initQuagga() {
      this.Quagga = Quagga;
      this.Quagga.onProcessed(this.onProcessed);
      this.Quagga.onDetected(this.onDetected);

      // 設定
      const config = {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#cameraArea"),
          constraints: { facingMode: "environment" }
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: { readers: ["ean_reader", "ean_8_reader"] }
      };
      this.Quagga.init(config, this.onInit);
    },
    onInit(err) {
      if (err) {
        console.log(err);
        return;
      }
      console.info("Initialization finished. Ready to start");
      this.Quagga.start();
    },
    onDetected(success) {
      this.code = success.codeResult.code;
      // 取得時の画像を表示
      const $resultImg = document.querySelector(".resultImg");
      $resultImg.setAttribute("src", this.Quagga.canvas.dom.image.toDataURL());
      this.Quagga.stop();
    },
    onProcessed(result) {
      const drawingCtx = this.Quagga.canvas.ctx.overlay;
      const drawingCanvas = this.Quagga.canvas.dom.overlay;

      if (result) {
        // 検出中の緑の線の枠
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
          const hasNotRead = (box) => box !== result.box;
          result.boxes.filter(hasNotRead).forEach((box) => {
            this.Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: "green",
              lineWidth: 2
            });
          });
        }

        // 検出に成功した瞬間の青い線の枠
        if (result.box) {
          this.Quagga.ImageDebug.drawPath(
            result.box,
            { x: 0, y: 1 },
            drawingCtx,
            {
              color: "blue",
              lineWidth: 2
            }
          );
        }

        // 検出に成功した瞬間の水平の赤い線
        if (result.codeResult && result.codeResult.code) {
          this.Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            {
              color: "red",
              lineWidth: 3
            }
          );
        }
      }
    },

    // html-qrcode
    onScan (decodedText, decodedResult) {
      console.log(decodedText, decodedResult)
      this.decodedText = decodedText
      this.decodedResult = decodedResult
      // handle the message here :)
    },

  },
  mounted: function() {
  },
};
</script>

<style scoped>
  #cameraArea {
  overflow: hidden;
  width: 320px;
  height: 240px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
}
#cameraArea video,
#cameraArea canvas {
  width: 320px;
  height: 240px;
}
button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: 30px;
}
.resultImg {
  width: 100%;
}
.resultCode {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.getMessage {
  color: red;
}

</style>
