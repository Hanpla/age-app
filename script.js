const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayOuput = document.getElementById("DD");
const monthOuput = document.getElementById("MM");
const yearOuput = document.getElementById("YY");

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼의 기본 동작(새로고침)을 방지

    let validInput = true;
    const now = new Date(); // 현재 날짜를 구함
    const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`); // 입력된 생년월일을 날짜 객체로 변환

    // 입력된 값이 유효한지 확인
    if (isNaN(dayInput.value) || dayInput.value < 1 || dayInput.value > 31) {
        dayInput.nextElementSibling.textContent = "유효하지 않은 값입니다."; // 다음 요소인 small 태그에 메시지 출력
        validInput = false;
    }
    if (isNaN(monthInput.value) || monthInput.value < 1 || monthInput.value > 12) {
        monthInput.nextElementSibling.textContent = "유효하지 않은 값입니다."; // 다음 요소인 small 태그에 메시지 출력
        validInput = false;
    }
    if (isNaN(yearInput.value) || yearInput.value.length !== 4 || yearInput.value > now.getFullYear()) {
        yearInput.nextElementSibling.textContent = "유효하지 않은 값입니다."; // 다음 요소인 small 태그에 메시지 출력
        validInput = false;
    }
    if (yearInput.value === "") {
        yearInput.nextElementSibling.textContent = "년도를 입력해주세요";
    }
    if (monthInput.value === "") {
        monthInput.nextElementSibling.textContent = "달을 입력해주세요";
    }
    if (dayInput.value === "") {
        dayInput.nextElementSibling.textContent = "날짜를 입력해주세요";
    }

    // 유효한 입력값일 때 계산
    if (validInput) {
        let years = now.getFullYear() - birthDate.getFullYear(); // 현재 날짜와 생일의 년도 차이 계산

        let months = now.getMonth() - birthDate.getMonth(); // 현재 날짜와 생일의 월 차이 계산
        let days = now.getDate() - birthDate.getDate(); // 현재 날짜와 생일의 일 차이 계산

        // 만약 생일이 오늘 이전이라면 한 해 더 먹은 것으로 계산
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }

        // 만약 일 수 차이가 음수이면 이전 월에서 빌려옴
        if (days < 0) {
            const daysInLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0).getDate();
            days += daysInLastMonth;
            months--;
        }

        // 결과 출력
        yearOuput.textContent = `${years}`;
        monthOuput.textContent = `${months}`;
        dayOuput.textContent = `${days}`;

        yearInput.nextElementSibling.textContent = "";
        monthInput.nextElementSibling.textContent = "";
        dayInput.nextElementSibling.textContent = "";
    }
});









