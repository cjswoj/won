// 추가 버튼을 눌렀을 때 실행되는 함수
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('일정을 입력해주세요!');
        return;
    }

    // 새로운 리스트(li) 만들기
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    // 리스트 안에 들어갈 텍스트와 삭제 버튼 추가
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">삭제</button>
    `;

    // 화면에 표시하고 입력창 비우기
    taskList.appendChild(li);
    taskInput.value = '';
}

// 삭제 버튼을 눌렀을 때 실행되는 함수
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

// 엔터키를 쳐도 일정이 추가되게 만들기
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});