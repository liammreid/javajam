var age;

age = prompt("Enter your age:")
if (age >= 65){
    output = "Coffee Night for Seniors! This Friday get some free Coffee!"
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "Enjoy Music and Make Some Lasting Memories"
}

document.getElementById("verify").innerHTML = output;