var mtable = "";

function economy() {
	wait(true);
	$.ajax({
		url: "/testrest/webapi/cars/economy",
		dataType: "JSON",
		type: "GET",
		data: {},
		success: (res) => {
			if (res.length == 0) {
				alert("no cars found....");
			} else {
				if (mtable != "") {
					document.getElementById("cartable").removeChild(mtable);
				}
				let table = document.createElement("table");
				
				let thh = document.createElement("tr");

					let sr = document.createElement("th");
					sr.innerHTML = "Sr No";					
					thh.appendChild(sr);

					let nameh = document.createElement("th");
					nameh.innerHTML = "Name";
					thh.appendChild(nameh);

					let brandh = document.createElement("th");
					brandh.innerHTML = "Brand";
					thh.appendChild(brandh);

					let minch = document.createElement("th");
					minch.innerHTML = "Min Cost";
					thh.appendChild(minch);

					let maxch = document.createElement("th");
					maxch.innerHTML = "Max Cost";
					thh.appendChild(maxch);

					table.appendChild(thh);
				
				
				let id = 1;
				res.forEach((item) => {
					let tr = document.createElement("tr");

					let idt = document.createElement("td");
					idt.innerHTML = id;
					id = id + 1;
					tr.appendChild(idt);

					let name = document.createElement("td");
					name.innerHTML = item.name;
					tr.appendChild(name);

					let brand = document.createElement("td");
					brand.innerHTML = item.brand;
					tr.appendChild(brand);

					let minc = document.createElement("td");
					minc.innerHTML = item.min_cost;
					tr.appendChild(minc);

					let maxc = document.createElement("td");
					maxc.innerHTML = item.max_cost;
					tr.appendChild(maxc);

					table.appendChild(tr)
				});
				//table.appendChild(tbody);
				document.getElementById("cartable").appendChild(table);
				mtable = table;
			}
		wait(false);
		},

		error: () => {
			alert("data not fatched.....");
		}
	});	
}






//budget
function budget() {
	wait(true);
	$.ajax({
		url: "/testrest/webapi/cars/budget",
		dataType: "JSON",
		type: "GET",
		data: {},
		success: (res) => {
			if (res.length == 0) {
				alert("no cars found....");
			} else {
				if (mtable != "") {
					document.getElementById("cartable").removeChild(mtable);
				}
				let table = document.createElement("table");
				
				let thh = document.createElement("tr");

					let sr = document.createElement("th");
					sr.innerHTML = "Sr No";					
					thh.appendChild(sr);

					let nameh = document.createElement("th");
					nameh.innerHTML = "Name";
					thh.appendChild(nameh);

					let brandh = document.createElement("th");
					brandh.innerHTML = "Brand";
					thh.appendChild(brandh);

					let minch = document.createElement("th");
					minch.innerHTML = "Min Cost";
					thh.appendChild(minch);

					let maxch = document.createElement("th");
					maxch.innerHTML = "Max Cost";
					thh.appendChild(maxch);

					table.appendChild(thh);
				
				
				let id = 1;
				res.forEach((item) => {
					let tr = document.createElement("tr");

					let idt = document.createElement("td");
					idt.innerHTML = id;
					id = id + 1;
					tr.appendChild(idt);

					let name = document.createElement("td");
					name.innerHTML = item.name;
					tr.appendChild(name);

					let brand = document.createElement("td");
					brand.innerHTML = item.brand;
					tr.appendChild(brand);

					let minc = document.createElement("td");
					minc.innerHTML = item.min_cost;
					tr.appendChild(minc);

					let maxc = document.createElement("td");
					maxc.innerHTML = item.max_cost;
					tr.appendChild(maxc);

					table.appendChild(tr)
				});
				//table.appendChild(tbody);
				document.getElementById("cartable").appendChild(table);
				mtable = table;
			}
		wait(false);
		},

		error: () => {
			alert("data not fatched.....");
		}
	});	
}




//midrange
function midrange() {
	wait(true);
	$.ajax({
		url: "/testrest/webapi/cars/midrange",
		dataType: "JSON",
		type: "GET",
		data: {},
		success: (res) => {
			if (res.length == 0) {
				alert("no cars found....");
			} else {
				if (mtable != "") {
					document.getElementById("cartable").removeChild(mtable);
				}
				let table = document.createElement("table");
				
				let thh = document.createElement("tr");

					let sr = document.createElement("th");
					sr.innerHTML = "Sr No";					
					thh.appendChild(sr);

					let nameh = document.createElement("th");
					nameh.innerHTML = "Name";
					thh.appendChild(nameh);

					let brandh = document.createElement("th");
					brandh.innerHTML = "Brand";
					thh.appendChild(brandh);

					let minch = document.createElement("th");
					minch.innerHTML = "Min Cost";
					thh.appendChild(minch);

					let maxch = document.createElement("th");
					maxch.innerHTML = "Max Cost";
					thh.appendChild(maxch);

					table.appendChild(thh);
				
				
				let id = 1;
				res.forEach((item) => {
					let tr = document.createElement("tr");

					let idt = document.createElement("td");
					idt.innerHTML = id;
					id = id + 1;
					tr.appendChild(idt);

					let name = document.createElement("td");
					name.innerHTML = item.name;
					tr.appendChild(name);

					let brand = document.createElement("td");
					brand.innerHTML = item.brand;
					tr.appendChild(brand);

					let minc = document.createElement("td");
					minc.innerHTML = item.min_cost;
					tr.appendChild(minc);

					let maxc = document.createElement("td");
					maxc.innerHTML = item.max_cost;
					tr.appendChild(maxc);

					table.appendChild(tr)
				});
				//table.appendChild(tbody);
				document.getElementById("cartable").appendChild(table);
				mtable = table;
			}
		wait(false);
		},

		error: () => {
			alert("data not fatched.....");
		}
	});	
}



//luxury
function luxury() {
	wait(true);
	$.ajax({
		url: "/testrest/webapi/cars/luxury",
		dataType: "JSON",
		type: "GET",
		data: {},
		success: (res) => {
			if (res.length == 0) {
				alert("no cars found....");
			} else {
				if (mtable != "") {
					document.getElementById("cartable").removeChild(mtable);
				}
				let table = document.createElement("table");
				
				let thh = document.createElement("tr");

					let sr = document.createElement("th");
					sr.innerHTML = "Sr No";					
					thh.appendChild(sr);

					let nameh = document.createElement("th");
					nameh.innerHTML = "Name";
					thh.appendChild(nameh);

					let brandh = document.createElement("th");
					brandh.innerHTML = "Brand";
					thh.appendChild(brandh);

					let minch = document.createElement("th");
					minch.innerHTML = "Min Cost";
					thh.appendChild(minch);

					let maxch = document.createElement("th");
					maxch.innerHTML = "Max Cost";
					thh.appendChild(maxch);

					table.appendChild(thh);
				
				
				let id = 1;
				res.forEach((item) => {
					let tr = document.createElement("tr");

					let idt = document.createElement("td");
					idt.innerHTML = id;
					id = id + 1;
					tr.appendChild(idt);

					let name = document.createElement("td");
					name.innerHTML = item.name;
					tr.appendChild(name);

					let brand = document.createElement("td");
					brand.innerHTML = item.brand;
					tr.appendChild(brand);

					let minc = document.createElement("td");
					minc.innerHTML = item.min_cost;
					tr.appendChild(minc);

					let maxc = document.createElement("td");
					maxc.innerHTML = item.max_cost;
					tr.appendChild(maxc);

					table.appendChild(tr)
				});
				//table.appendChild(tbody);
				document.getElementById("cartable").appendChild(table);
				mtable = table;
			}
		wait(false);
		},

		error: () => {
			alert("data not fatched.....");
		}
	});	
}


function wait(value){
	if(value==true){
		let layer = document.getElementById("layer");
		layer.removeAttribute("hidden");			
	}else{
		let layer = document.getElementById("layer");
		layer.setAttribute("hidden","hidden");
	}
}

