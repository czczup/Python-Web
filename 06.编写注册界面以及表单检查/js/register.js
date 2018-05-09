var isTrue = new Array();

function initForm() {
    window.setInterval("showTime()",1000);
    isTrue['name'] = false;
    isTrue['age'] = false;
    isTrue['academy'] = false;
    isTrue['major'] = false;
    isTrue['hobit'] = false;
    isTrue['telephone'] = false;
    isTrue['email'] = false;
    isTrue['remark'] = false;
}

function checkInputName() {
    var name = document.getElementById("name");
    var nameField = document.getElementById('nameField');
    var nameInfo = document.getElementById("nameInfo");
    if(name.value.length > 10) {
        nameField.setAttribute('class', 'field error');
        nameInfo.innerHTML = "您输入的姓名大于十个字符，请重新输入！";
        name.focus();
        isTrue['name'] = false;
    } else {
        nameField.setAttribute('class', 'field');
        nameInfo.innerHTML = "";
        isTrue['name'] = true;
    }
}

function addAgeOption() {
    var ageSelect = document.getElementById('ageSelect');
    if(ageSelect.length==1) {
        for (var i = 18; i <= 28; i++) {
            ageSelect.options.add(new Option(i,i));
        }
    }
}
function selectAge() {
    var ageSelect = document.getElementById('ageSelect');
    var selectText = ageSelect.options[ageSelect.selectedIndex].text;
    if(selectText!="请选择年龄") {
        isTrue['age'] = true;
    };
}

function checkTelephone() {
    var telephone = document.getElementById("telephone");
    var pattern = /^1[34578]\d{9}$/;
    var telephoneField = document.getElementById('telephoneField');
    var telephoneInfo = document.getElementById("telephoneInfo");
    if (!pattern.test(telephone.value) && telephone.value!="") {
        telephoneField.setAttribute('class', 'field error');
        telephoneInfo.innerHTML = "您输入的电话号码非法，请重新输入！";
        isTrue['telephone'] = false;
        telephone.focus();
    } else {
        telephoneField.setAttribute('class', 'field');
        telephoneInfo.innerHTML = "";
        isTrue['telephone'] = true;
    }
}

function checkEmail() {
    var email = document.getElementById("email");
    var pattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var emailField = document.getElementById('emailField');
    var emailInfo = document.getElementById("emailInfo");
    if (!pattern.test(email.value) && email.value!="") {
        emailField.setAttribute('class', 'field error');
        emailInfo.innerHTML = "您输入的电子邮箱非法，请重新输入！";
        isTrue['email'] = false;
        email.focus();
    } else {
        emailField.setAttribute('class', 'field');
        emailInfo.innerHTML = "";
        isTrue['email'] = true;
    }

}

function countRemark() {
    var remark = document.getElementById("remark");
    var remarkField = document.getElementById("remarkField");
    var counter = document.getElementById("counter");
    len = remark.value.length;
    if(len <=40) {
        remarkField.setAttribute('class', 'field');
        counter.innerHTML = "剩余可输入长度为"+(40-len);
        isTrue['remark'] = true;
    } else {
        counter.innerHTML = "超出可输入长度："+(len-40);
        remarkField.setAttribute('class', 'field error');
        isTrue['remark'] = false;
        remark.focus();
    }
    checkButton();
}

function selectAcademy() {
    var ITEE = new Array("软件工程","计算机科学与技术","物联网工程","数字媒体技术","电子信息工程","通信工程");
    var AEE = new Array("电气工程及其自动化","测控技术与仪器","自动化","建筑电气与智能化");
    var MEE = new Array("机械设计制造及其自动化","能源与环境系统工程","车辆工程","汽车服务工程");
    var academy2major = new Array();
    academy2major["ITEE"] = ITEE;
    academy2major["AEE"] = AEE;
    academy2major["MEE"] = MEE;
    var selection = document.getElementById("academy").value;
    isTrue['academy'] = true;
    var major = document.getElementById("major");
    major.innerHTML = "<option value=''>请选择专业</option>";
    majors = academy2major[selection];
    for (var idx in majors) {
        major.innerHTML += "<option value=''>"+majors[idx]+"</option>";
    }
}

function selectMajor() {
    var major = document.getElementById("major");
    var selectText = major.options[major.selectedIndex].text;
    if(selectText!="请选择专业") {
        isTrue['major'] = true;
    };
}

function selectHobit() {
    var hobit = document.getElementsByClassName('hobit');
    isTrue['hobit'] = false;
    for (var i = 0; i < hobit.length; i++) {
        if(hobit[i].checked) {
            isTrue['hobit'] = true;
            break;
        }
    }
}

function checkButton() {
    var button = document.getElementById("registerButton");
    var isAgree = document.getElementById("agree").checked;
    if (isAgree) {
        var canSubmit = true;
        for (var key in isTrue) {
            if (isTrue[key]==false) {
                canSubmit = false;
            }
        }
        if(canSubmit) {
            button.setAttribute('class', "ui teal button submit");
            button.removeAttribute("disabled");
        }
    } else {
        button.setAttribute('class', "ui disabled button submit");
    }
}

function addDiv() {
    var footer = document.getElementById("footer");
    var registerMessage = document.getElementById("registerMessage");
    if(registerMessage) {
        registerMessage.parentNode.removeChild(registerMessage);
    }
    var printInfo = document.createElement("div");
    printInfo.setAttribute('class', "ui teal message");
    printInfo.setAttribute('id', "registerMessage");
    var list = document.createElement("ul");
    list.setAttribute('class', "list");
    list.innerHTML += "<li>姓名："+document.getElementById("name").value+"</li>";
    list.innerHTML += "<li>年龄："+document.getElementById("ageSelect").value+"</li>";
    list.innerHTML += "<li>性别："+(document.getElementById("gender").checked?"男":"女")+"</li>";
    var academy = document.getElementById("academy");
    var academyText = academy.options[academy.selectedIndex].text;
    list.innerHTML += "<li>学院："+academyText+"</li>";
    var selectText = document.getElementById("major").options[major.selectedIndex].text;
    list.innerHTML += "<li>专业："+selectText+"</li>";
    var hobit = document.getElementsByClassName('hobit');
    var hobitText = "";
    for (var i = 0; i < hobit.length; i++) {
        if(hobit[i].checked) {
            hobitText += hobit[i].parentNode.children[1].innerHTML+" ";
        }
    }
    list.innerHTML += "<li>爱好："+hobitText+"</li>";
    list.innerHTML += "<li>电话号码："+document.getElementById("telephone").value+"</li>";
    list.innerHTML += "<li>电子邮箱："+document.getElementById("email").value+"</li>";
    var remark = document.getElementById("remark").value;
    if(remark!="") {
        list.innerHTML += "<li>备注："+remark+"</li>";
    }
    printInfo.appendChild(list);
    footer.parentNode.insertBefore(printInfo,footer);
}

function removeDivInfo() {
    var footer = document.getElementById("footer");
    var registerMessage = document.getElementById("registerMessage");
    if(registerMessage) {
        registerMessage.parentNode.removeChild(registerMessage);
    }
}

function showTime(){
    var timeButton = document.getElementById("timeButton");
    var now = new Date();
    var timeText = now.getFullYear()+"年"+(now.getMonth()+1)+"月"
                 + now.getDate()+"日"+now.getHours()+"时"
                 + now.getMinutes()+"分"+now.getSeconds()+"秒";
    timeButton.innerHTML = timeText;
}
