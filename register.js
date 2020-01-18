function markUnInputEles(markStr){
  let ngEles = $('form input').filter(function(){
    let isTarget = !this.value;
    if(isTarget) {
      this.placeholder = markStr;
    }
    return isTarget;
  }); 

  return ngEles;
}

function onClickRegister() {

  let ngEles = markUnInputEles('please input');
  if (ngEles.length > 0) {
    showMsg('入力漏れ');
    return false;
  }
 
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
      gotoLogin();
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

function gotoLogin() {
  let userId = document.getElementById('userId').value;
  window.location.href = 'login.html' + '?userId='+userId;
  //to log in page
}

