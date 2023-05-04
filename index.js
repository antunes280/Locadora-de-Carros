let cars = document.querySelectorAll('.car');

cars.forEach(car => {
	car.addEventListener('click', () => {
		cars.forEach(c => {
			c.classList.remove('selected');
			});
		car.classList.add('selected');
		});
	});

cars.forEach(car => {
	car.addEventListener('mouseover', () => {
		car.style.backgroundColor = "gray";
		});
	});

cars.forEach(car => {
	car.addEventListener('mouseout', () => {
		car.style.backgroundColor = "";
		});
	});

	function calculateTotal() {
		const days = document.getElementById("days").value;
		const total = days * 150;
		document.getElementById("total").textContent = total.toFixed(2);
	  }
	  

	  <script>
  function calculateTotal() {
    const days = document.getElementById("days").value;
    const pricePerDay = 150; // substitua este valor pelo preço por dia real do carro
    const total = days * pricePerDay;
    document.getElementById("total").textContent = total.toFixed(2);
  }
</script>

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
  console.log('Botão 1 clicado');
});

button2.addEventListener('click', () => {
  console.log('Botão 2 clicado');
});
