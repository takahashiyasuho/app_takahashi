const question = [
    ["10時のおやつは<br>どれ食べたい？", "1. メロンパン", "2. ポテトチップス", "3. ヨーグルト", 3],
    ["3時のおやつは<br>どれ食べたい？", "1. ドーナツ","2. チーズケーキ","3. 甘い飲み物500ml" ,2],
    ["夜のおやつは<br>どれ食べたい？", "1. 枝豆", "2. カップ麺", "3. アイスクリーム", 1]
];

let countDownTimer = 10; //制限時間
let successFlag = false; //最後まで解答したか
let successCount = 0; //正答数
let questionCount = 0 //問題数

// 最初は問題を解くボタンだけ表示
document.getElementById("ansArea").style.visibility = "hidden";
document.getElementById("answer1").style.visibility = "hidden";
document.getElementById("ans-gazo-area1").style.visibility = "hidden";
document.getElementById("answer2").style.visibility = "hidden";
document.getElementById("ans-gazo-area2").style.visibility = "hidden";
document.getElementById("answer3").style.visibility = "hidden";
document.getElementById("ans-gazo-area3").style.visibility = "hidden";
document.getElementById("answer4").style.visibility = "hidden";
document.getElementById("ans-gazo-area4").style.visibility = "hidden";
document.getElementById("site-address").style.visibility = "hidden";




// タイマー用の記述
const countTimer = () => {
    if (successFlag == false) {
        document.getElementById("countDown").innerHTML = `残り${countDownTimer}秒です`;
        if (!countDownTimer == 0) {
            setTimeout(() => {
                countDownTimer = countDownTimer - 1;
                countTimer();
            }, 1000);
        } else {

            
            setTimeout(() => {
                alert("時間切れ");
                // カウントをリセットする
                countDownTimer = 10;
                questionCount = 0;
                successCount = 0;
    
                // 問題を非表示にし、ボタンを表示する
                document.getElementById("ansStartButton").style.display = "block";
                document.getElementById("ansArea").style.visibility = "hidden";
                document.getElementById("countDown").style.visibility = "hidden";
                // ボタンの表示を変える
                document.getElementById("ansStartButton").innerHTML = "再度挑戦する";
            })
        }
    
    }
}

// 問題用の記述
const viewQuestion = () => {
    document.getElementById("answer1").style.visibility = "hidden";
    document.getElementById("answer2").style.visibility = "hidden";
    document.getElementById("answer3").style.visibility = "hidden";
    document.getElementById("answer4").style.visibility = "hidden";
    // 問題文表示
    document.getElementById("question").innerHTML = question[questionCount][0];
    // 選択肢表示
    document.getElementById("ans1").innerHTML = question[questionCount][1];
    document.getElementById("ans2").innerHTML = question[questionCount][2];
    document.getElementById("ans3").innerHTML = question[questionCount][3];
    document.getElementById("countDown").style.visibility = "visible";

}

const ansButton = (e) => {
    if (e == question[questionCount][4]) {
        // alert("正解");
        successCount = successCount + 1;
        //successCount++;
    } else {
        // alert("不正解");
    }
    // 問題数のカウントを増やす
    questionCount = questionCount + 1;
    //questionCount++;

    if (questionCount == question.length) {

        if(successCount === 3){
        document.getElementById("answer1").innerHTML = ("あなたは将来<br>健康美人になれるかも!");
        document.getElementById("countDown").style.visibility = "hidden";
        document.getElementById("ansArea").style.visibility = "hidden";
        document.getElementById("answer1").style.visibility = "visible";
        document.getElementById("ans-gazo-area1").style.visibility = "visible";
        document.getElementById("site-address").style.visibility = "visible";
        document.getElementById("ansStartButton").style.display = "block";
    } else if(successCount === 2){
        document.getElementById("answer2").innerHTML = ("あなたは将来<br>ストレス知らずな仏になれます");
        document.getElementById("countDown").style.visibility = "hidden";
        document.getElementById("ansArea").style.visibility = "hidden";
        document.getElementById("answer2").style.visibility = "visible";
        document.getElementById("ans-gazo-area2").style.visibility = "visible";
        document.getElementById("site-address").style.visibility = "visible";
        document.getElementById("ansStartButton").style.display = "block";
    } else if(successCount === 1){
        document.getElementById("answer3").innerHTML = ("あなたは将来<br>ぽっちゃりさんになります");
        document.getElementById("countDown").style.visibility = "hidden";
        document.getElementById("ansArea").style.visibility = "hidden";
        document.getElementById("answer3").style.visibility = "visible";
        document.getElementById("ans-gazo-area3").style.visibility = "visible";
        document.getElementById("site-address").style.visibility = "visible";
        document.getElementById("ansStartButton").style.display = "block";
    }else{
        document.getElementById("answer4").innerHTML = ("あなたは将来<br>病気になっちゃうかも知れません");
        document.getElementById("countDown").style.visibility = "hidden";
        document.getElementById("ansArea").style.visibility = "hidden";
        document.getElementById("answer4").style.visibility = "visible";
        document.getElementById("ans-gazo-area4").style.visibility = "visible";
        document.getElementById("site-address").style.visibility = "visible";
        document.getElementById("ansStartButton").style.display = "block";
        }
        
        questionCount = 0;
        successCount = 0;
        countDownTimer = 10 + 1;
        successFlag = true;

        
    } else {
        viewQuestion();
    }
}





const ansStart = () => {
    // 問題を解くボタンを消す
    document.getElementById("ansStartButton").style.display = "none";
    document.getElementById("site-address").style.visibility = "hidden";
    document.getElementById("ans-gazo-area1").style.visibility = "hidden";
    document.getElementById("ans-gazo-area2").style.visibility = "hidden";
    document.getElementById("ans-gazo-area3").style.visibility = "hidden";
    document.getElementById("ans-gazo-area4").style.visibility = "hidden";

    successFlag = false;
    // 問題文と選択肢を表示
    document.getElementById("ansArea").style.visibility = "visible";
    countTimer();
    viewQuestion();
}
