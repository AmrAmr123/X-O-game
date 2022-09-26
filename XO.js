let squares = document.querySelectorAll(".square");
squares.forEach(function (ele) {
  ele.onclick = function () {
    game(ele.id);
  };
});

let turn = "x";
function game(id) {
  let square = document.getElementById(id);
  if (turn == "x" && square.innerHTML == "") {
    square.innerHTML = "X";
    square.style.cssText = "color:orange";
    document.querySelector(".o").style.color = "red";
    document.querySelector(".x").style.color = "black";
    turn = "o";
  } else if (turn == "o" && square.innerHTML == "") {
    square.style.cssText = "color:red";
    document.querySelector(".o").style.color = "black";
    document.querySelector(".x").style.color = "orange";
    square.innerHTML = "o";
    turn = "x";
  }
  winner();
}

let arr = [];
function winner() {
  for (let i = 1; i < 10; i++) {
    arr[i] = document.getElementById(`item` + i).innerHTML;
  }
  if (arr[1] == arr[2] && arr[2] == arr[3] && arr[3] != "") {
    end(1, 2, 3);
  } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[6] != "") {
    end(4, 5, 6);
  } else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[9] != "") {
    end(7, 8, 9);
  } else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != "") {
    end(1, 4, 7);
  } else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != "") {
    end(2, 5, 8);
  } else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[9] != "") {
    end(3, 6, 9);
  } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] != "") {
    end(1, 5, 9);
  } else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != "") {
    end(3, 5, 7);
  } else if (
    arr[1] != "" &&
    arr[2] != "" &&
    arr[3] != "" &&
    arr[4] != "" &&
    arr[5] != "" &&
    arr[6] != "" &&
    arr[7] != "" &&
    arr[8] != "" &&
    arr[9] != ""
  ) {
    NoWinnerIs();
  }
}

let win = document.querySelector(".winner");
function end(num1, num2, num3) {
  document.getElementById(`item` + num1).style.backgroundColor = "#81a8f0";
  document.getElementById(`item` + num2).style.backgroundColor = "#81a8f0";
  document.getElementById(`item` + num3).style.backgroundColor = "#81a8f0";
  win.innerHTML = `${arr[num1]}-winner`;
  setInterval(function () {
    win.innerHTML += ".";
    setTimeout(function () {
      location.reload();
    }, 2000);
  }, 1000);
}
function NoWinnerIs() {
  win.innerHTML = `no winner`;
  setInterval(function () {
    win.innerHTML += ".";
    setTimeout(function () {
      location.reload();
    }, 2000);
  }, 1000);
}
