var term;

let item = {
  key1: {
    name: "Test 1",
  },
  key2: 1,
};

jQuery(function ($) {
  var id = 1;
  term = $("body").terminal(
    function (command, term) {
      if (command == "help") {
        term.echo("[[;white;black]" + "Các lệnh hiện có: \n" + "\n- clear: dùng để xóa màn hình.\n" + "\n-=- Các lệnh hành động -=- \n" + "]");
      } else if (command == "cd test") {
        term.echo("Lệnh test được dùng để thí nghiệm, vui lòng ra ngoài.");

        //#region
        term.push(
          function (command, term) {
            if (command == "help") {
              term.echo("Lệnh test được dùng để thí nghiệm, vui lòng ra ngoài. \n" + "- exit: thoát ra. \n");
            } else if (command == "test") {
              term.echo("Completed!");
            } else if (command == "print") {
              term.echo("Completed!" + item.key1.name);
            } else if (command == "check") {
              if (item.key1 == 1) {
                term.echo(item.key1.name);
              } else {
                term.echo("Fasle");
              }
            } else if (command == "exit") {
              term.pop();
            } else {
              term.echo("Lệnh không rõ: " + command);
            }
          },
          {
            prompt: "test> ",
            name: "test",
          }
        );
        //#endregion
      } else if (command == "hatetuananh") {
        term.echo('\n"Tôi sẽ ghét tuananh cho tới già, tôi ghét ông!!"\n');
      } else {
        term.echo("Lệnh không rõ: " + command);
      }
    },
    {
      greetings:
        "[[b;red;black]" +
        "\nLưu ý: Việc có quảng cáo liên quan đến chính trị là do chúng tôi dùng máy chủ miễn phí, các việc liên quan đến chính trị không hề liên quan đến chúng tôi. \n]" +
        "[[b;white;black]" +
        "\nChào mừng bạn đến với Hiệp hội Thù ghét tuananh!\n" +
        "\nHiệp hội thù ghét tuananh được thành lập với mục đích lật đổ ][[b;crimson;black]tuananh the Whale]. \n" +
        "[[b;white;black]Hiệp hội không hoạt động ngầm, không có ràng buộc, mọi con người đều có quyền tham gia vào hiệp hội và đều có quyền lật đổ tuananh bất cứ lúc nào. \n]" +
        "\n[[b;gold;black]Vui lòng truy cập bằng máy tính.]\n" +
        "[[b;white;black]" +
        "\nNhập ']" +
        "[[ib;yellow;black]" +
        "help]" +
        "[[b;white;black]" +
        "' để hiển thị các lệnh hiện có. \n]",

      onBlur: function () {
        // prevent loosing focus
        return false;
      },
      prompt: "/> ",
      name: "/",
    }
  );
});
