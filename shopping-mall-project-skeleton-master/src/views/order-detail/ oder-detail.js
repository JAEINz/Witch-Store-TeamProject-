import { getImageUrl } from "../aws-s3.js";
import { checkLogin, createNavbar } from "../../useful-functions.js";
import * as Api from "../../api.js";

// 요소(element), input 혹은 상수
const ordersContainer = document.querySelector("#ordersContainer");
// const modal = document.querySelector("#modal");
// const modalBackground = document.querySelector("#modalBackground");
// const modalCloseButton = document.querySelector("#modalCloseButton");
const deleteCompleteButton = document.querySelector("#deleteCompleteButton");
const deleteCancelButton = document.querySelector("#deleteCancelButton");

checkLogin();
addAllElements();
addAllEvents();

// 요소 삽입 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllElements() {
  createNavbar();
  insertOrders();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  //modalBackground.addEventListener("click", closeModal);
  //modalCloseButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", keyDownCloseModal);
  deleteCompleteButton.addEventListener("click", deleteOrderData);
  deleteCancelButton.addEventListener("click", cancelDelete);
}

// 페이지 로드 시 실행, 삭제할 주문 id를 전역변수로 관리함
let orderIdToDelete;
async function insertOrders() {
  const orders = await Api.get("/api/orderlist/user");
  const imageUrl = await getImageUrl(imageKey);

  for (const order of orders) {
    const { _id, createdAt, summaryTitle, status } = order;
    const date = createdAt.split("T")[0];

    ordersContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="order-product" id="order-${_id}">
            <figure class="product-img">
                <img id="image-${_id}" src="${imageUrl}"alt="product-image"/>
            </figure>

            <p class="product-name" >${summaryTitle}</p>
            <p class="count-number" id="quantityInput-${_id}">1</p>
            <p class="product-price" id="total-${_id}">${addCommas(quantity * price)}원</p>
        </div>
      `
    );

    const deleteButton = document.querySelector(`#deleteButton-${_id}`);

    // Modal 창 띄우고, 동시에, 전역변수에 해당 주문의 id 할당
    deleteButton.addEventListener("click", () => {
      orderIdToDelete = _id;
      openModal();
    });
  }
}

// db에서 주문정보 삭제
async function deleteOrderData(e) {
  e.preventDefault();

  try {
    await Api.delete("/api/orders", orderIdToDelete);

    // 삭제 성공
    alert("주문 정보가 삭제되었습니다.");

    // 삭제한 아이템 화면에서 지우기
    const deletedItem = document.querySelector(`#order-${orderIdToDelete}`);
    deletedItem.remove();

    // 전역변수 초기화
    orderIdToDelete = "";

    closeModal();
  } catch (err) {
    alert(`주문정보 삭제 과정에서 오류가 발생하였습니다: ${err}`);
  }
}

//Modal 창에서 아니오 클릭할 시, 전역 변수를 다시 초기화함.
function cancelDelete() {
  orderIdToDelete = "";
  closeModal();
}

// Modal 창 열기
function openModal() {
  modal.classList.add("is-active");
}

// Modal 창 닫기
function closeModal() {
  modal.classList.remove("is-active");
}

// 키보드로 Modal 창 닫기
function keyDownCloseModal(e) {
  // Esc 키
  if (e.keyCode === 27) {
    closeModal();
  }
}

