main();

// �q�o�}�l
function main() {
  const canvas = document.querySelector("#glCanvas");
  // ��l�� GL context
  const gl = canvas.getContext("webgl");

  // �� WebGL ���Ĥ~�~�����
  if (gl === null) {
    alert("�L�k��l�� WebGL�A�z���s�������䴩�C");
    return;
  }

  // �]�w�M����m���¦�A�������z��
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // �z�L�M����ӲM����m�w�İ�
  gl.clear(gl.COLOR_BUFFER_BIT);
}