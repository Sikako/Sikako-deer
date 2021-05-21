main();

// 從這開始
function main() {
  const canvas = document.querySelector("#glCanvas");
  // 初始化 GL context
  const gl = canvas.getContext("webgl");

  // 當 WebGL 有效才繼續執行
  if (gl === null) {
    alert("無法初始化 WebGL，您的瀏覽器不支援。");
    return;
  }

  // 設定清除色彩為黑色，完全不透明
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 透過清除色來清除色彩緩衝區
  gl.clear(gl.COLOR_BUFFER_BIT);
}