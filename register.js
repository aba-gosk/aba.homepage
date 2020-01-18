function onClickRegister() {

  let postData = $('form').serialize();
  console.log('postData: ', postData);

  $.ajax({
    url: './register',
    type: 'GET',
    dataType: 'JSON',
    data: postData,
  }).done((data, textStatus) => {
    console.log('response: ', data);

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

