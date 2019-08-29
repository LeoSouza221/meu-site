let select = 0;
let select_item = document.getElementById("item-select");
let i = 0;

function adjustSelectItem(current, next) {
  select_item.children[current].classList.remove('selected-menu-item');
  select = next;
  select_item.children[select].classList.add('selected-menu-item');
  // console.log(select_item.children[select].firstChild.href)
  const right = document.getElementsByClassName('right-button');
  right[0].getElementsByTagName("a").href = select_item.children[select].firstChild.href;
  // console.log(right[0].getElementsByTagName("a").href);
}

const button_action = {
  DOWN: () => {
    if (select === 3) {
      adjustSelectItem(select, 0);
      return;
    }
    adjustSelectItem(select, select+=1);
  },
  UP: () => {
    if (select === 0) {
      adjustSelectItem(select, 3);
      return;
    }
    adjustSelectItem(select, select-=1);
  },
};

function markSelectedItem(event, button_press) {
  let i = 0;
  if (!event && button_press) {
    button_action[button_press]();
    return;
  } else if (!event && !button_press) {
    select_item.children[select].classList.add('selected-menu-item');
    return;
  }
  for (i; i < select_item.children.length; i++) {
    if (event.target == select_item.children[i]) {
      adjustSelectItem(select, i);
    }
  }
}

select_item.addEventListener("mouseover", function(event) {
  markSelectedItem(event);
});

let buttons_left = document.addEventListener("keydown", event => {
  if (event.keyCode === 40) {
    button_action.DOWN();
    return;
  }
  if (event.keyCode === 38) {
    button_action.UP();
  }
});

window.onload = markSelectedItem();
