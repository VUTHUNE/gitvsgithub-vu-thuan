const quotes = [
    "Ra xã hội làm ăn bươn chải liều thì ăn nhiều không liều thì ăn ít .Muốn thành công thì phải chấp nhận trải qua đắng cay ngọt bùi. Làm ăn muốn kiếm được tiền thì phải chấp nhận mạo hiểm nguy hiểm một tí nhưng trong tầm kiểm soát. Xã hội này chỉ có làm chịu khó cần cù thì bù siêng năng. Chỉ có làm thì mới có ăn. Những cái loại không làm mà đòi có ăn thì ăn đầu bu*i nhá ăn cứt. Thế cho nó dễ! (Huấn Rose)",
    "Tôi đứng vai trò là một người nghiện, một tầng lớp thấp của xã hội. Nhưng nói thật về cái trình độ nhận thức về kiến thức về nền kinh tế thượng tầng, tôi cũng không thua kém một vị học hàm tiến sĩ nào. (Tiến Bịp)",
    "Không thầy đố mày làm nên",
    "Đi một ngày đàng, học một sàng khôn",
    "Có chí thì nên, có gan thì đành"
];

const elementQuote = document.getElementById("quote");
const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    elementQuote.textContent = quotes[randomIndex];
});
