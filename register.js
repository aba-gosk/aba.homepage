function onClickRegester() {

  $.ajax({
    url: './register',
    type: 'GET',
    dataType: 'JSON',
    data: $('form').serialize(),
  }).done((data, textStatus) => {
    if (data.success) {
      doSubmit(data);
    } else {
      showMsg(data);
    }
  }).fail((xhr, textStatus, errorThrown) => {
    showMsg(textStatus);
  });

  return false;
}

function showMsg(data) {
  $('#msg').html(data.msg);
}

function doSubmit(data) {
  window.location.href = 'top.html';
  //to log in page
}

