function setDefaultUserId() {
  let mt = document.location.href.match(/userId=([^&]+)/);
  if (mt) {
    document.getElementById('userId').value = mt[1];
  }
}

function onClickLogin() {

  let userId = document.getElementById('userId').value;
  let pass = document.getElementById('pass').value;
  if (!(userId && pass)) {
    showMsg('入力漏れ');
    return false;
  }

  let postData = $('form').serialize();
  console.log('postData: ', postData);

  $.ajax({
    url: './login',
    type: 'GET',
    dataType: 'JSON',
    data: postData,
  }).done((data, textStatus) => {
    console.log('response: ', data);

    if (data.success) {
      gotoTargetPage();
    } else {
      showMsg(data);
    }
  }).fail((xhr, textStatus, errorThrown) => {
    showMsg(textStatus);
  });

  return false;
}

function showMsg(data) {
  $('#msg').html(data.msg || data);
}

function gotoTargetPage(userId) {
  window.location.href = 'login.html' + '?userId=' + userId;
  //to log in page
}

