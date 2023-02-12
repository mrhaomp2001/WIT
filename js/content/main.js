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
      // } else if (command == "#command") {
      //   term.echo('#Work');
      } else {
        term.echo("Lệnh không rõ: " + command);
      }
    },
    {
      greetings:
        "[[b;white;black]" +
        "\nChào mừng bạn đến với WIT - Witch International Technology!]\n" +
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
