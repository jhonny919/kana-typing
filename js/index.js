function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let alph,
    arr = [],
    right = 0,
    wrong = 0,
    interval,
    sec;

function addMenu() {
    document.body.innerHTML += menu;

    document.getElementsByClassName("start_menu_hiragana")[0].onclick = () => {
        document.getElementsByClassName("start_menu")[0].outerHTML = "";

        addHiragana();
    };

    document.getElementsByClassName("start_menu_katakana")[0].onclick = () => {
        document.getElementsByClassName("start_menu")[0].outerHTML = "";

        addKatakana();
    };

    document.getElementsByClassName("start_menu_mixed")[0].onclick = () => {
        document.getElementsByClassName("start_menu")[0].outerHTML = "";

        addHiragana_mixed();
    };
}

function addHiragana() {
    document.body.innerHTML += hiragana;
    addHiraKataMenu();
    alph = true;

    for (let i = 0; i < document.getElementsByClassName("column_use").length; i++) {
        document.getElementsByClassName("column_use")[i].onclick = () => {
            if (document.getElementsByClassName("column_use")[i].classList.contains("active")) {
                document.getElementsByClassName("column_use")[i].classList.remove("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`)[j].classList.remove("active");
                }
            } else {
                document.getElementsByClassName("column_use")[i].classList.add("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`)[j].classList.add("active");
                }
            }
        };
    }

    for (let i = 0; i < document.getElementsByClassName("table_cell").length; i++) {
        document.getElementsByClassName("table_cell")[i].onclick = () => {
            if (document.getElementsByClassName("table_cell")[i].classList.contains("active")) {
                document.getElementsByClassName("table_cell")[i].classList.remove("active");
                document.getElementById(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).classList.remove("active");
            } else {
                document.getElementsByClassName("table_cell")[i].classList.add("active");

                let count = 0;
                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).length; j++) {
                    if (document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`)[j].classList[2] === "active") count++;
                }
                if (count == document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).length)
                    document.getElementById(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).classList.add("active");
            }
        };
    }
}

function addKatakana() {
    document.body.innerHTML += katakana;
    addHiraKataMenu();
    alph = false;

    for (let i = 0; i < document.getElementsByClassName("column_use").length; i++) {
        document.getElementsByClassName("column_use")[i].onclick = () => {
            if (document.getElementsByClassName("column_use")[i].classList.contains("active")) {
                document.getElementsByClassName("column_use")[i].classList.remove("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`)[j].classList.remove("active");
                }
            } else {
                document.getElementsByClassName("column_use")[i].classList.add("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use")[i].id}`)[j].classList.add("active");
                }
            }
        };
    }

    for (let i = 0; i < document.getElementsByClassName("table_cell").length; i++) {
        document.getElementsByClassName("table_cell")[i].onclick = () => {
            if (document.getElementsByClassName("table_cell")[i].classList.contains("active")) {
                document.getElementsByClassName("table_cell")[i].classList.remove("active");
                document.getElementById(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).classList.remove("active");
            } else {
                document.getElementsByClassName("table_cell")[i].classList.add("active");

                let count = 0;
                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).length; j++) {
                    if (document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`)[j].classList[2] === "active") count++;
                }
                if (count == document.getElementsByClassName(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).length)
                    document.getElementById(`${document.getElementsByClassName("table_cell")[i].classList[1]}`).classList.add("active");
            }
        };
    }
}

function add(elem = "ふ", col = true) {
    document.getElementsByClassName("hira_kata_trainer_cell")[0].outerHTML = "";
    document.getElementsByClassName("center_cell")[0].classList.remove("center_cell");
    document.getElementsByClassName("center_letter")[0].classList.remove("center_letter");

    document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
        <div class="hira_kata_trainer_cell">
            <div class="hira_kata_trainer_letter">${elem}</div>
        </div>`;

    document.getElementsByClassName("hira_kata_trainer_cell")[4].classList.add("center_cell");
    document.getElementsByClassName("hira_kata_trainer_cell")[4].firstElementChild.classList.add("center_letter");

    if (col) document.getElementsByClassName("hira_kata_trainer_cell")[3].firstElementChild.style.color = "green";
    else document.getElementsByClassName("hira_kata_trainer_cell")[3].firstElementChild.style.color = "darkred";
}

function addHiraKataMenu() {
    document.body.innerHTML += HiraKataMenu;
    document.body.innerHTML += HiraKataTrainer;
    document.getElementsByClassName("hira_kata_trainer")[0].innerHTML = "";

    document.getElementsByClassName("HiraKataMenu_Back")[0].onclick = () => {
        document.getElementsByClassName("table")[0].outerHTML = "";
        document.getElementsByClassName("HiraKataMenu")[0].outerHTML = "";
        document.getElementsByClassName("hira_kata_trainer")[0].outerHTML = "";
        if (interval) clearInterval(interval);
        sec = 0;

        addMenu();
    };

    document.getElementsByClassName("HiraKataMenu_Select")[0].onclick = () => {
        for (let i = 0; i < document.getElementsByClassName("table_cell").length; i++) {
            document.getElementsByClassName("table_cell")[i].classList.add("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use").length; i++) {
            document.getElementsByClassName("column_use")[i].classList.add("active");
        }
    };

    document.getElementsByClassName("HiraKataMenu_Default")[0].onclick = () => {
        for (let i = 0; i < document.getElementsByClassName("table_cell").length; i++) {
            document.getElementsByClassName("table_cell")[i].classList.remove("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use").length; i++) {
            document.getElementsByClassName("column_use")[i].classList.remove("active");
        }
    };

    document.getElementsByClassName("HiraKataMenu_Start")[0].onclick = () => {
        arr = [];
        right = wrong = 0;

        // clear place
        document.getElementsByClassName("hira_kata_trainer")[0].innerHTML = "";
        // init arr
        for (let i = 0; i < document.getElementsByClassName("table_cell active").length; i++) {
            arr.push(document.getElementsByClassName("table_cell active")[i].firstElementChild.textContent);
        }
        // delete active class
        for (let i = 0; i < document.getElementsByClassName("table_cell").length; i++) {
            document.getElementsByClassName("table_cell")[i].classList.remove("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use").length; i++) {
            document.getElementsByClassName("column_use")[i].classList.remove("active");
        }

        if (interval) clearInterval(interval);
        sec = 0;

        if (arr.length) {
            document.getElementsByClassName("hira_kata_trainer")[0].outerHTML = HiraKataTrainer;
            // add 4 voids
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell">
                    <div class="hira_kata_trainer_letter"></div>
                </div>`;
            }
            // add center element
            document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell center_cell">
                    <div class="hira_kata_trainer_letter center_letter">${arr[getRandomInt(arr.length)]}</div>
                </div>`;
            // add last 4 elements
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell">
                    <div class="hira_kata_trainer_letter">${arr[getRandomInt(arr.length)]}</div>
                </div>`;
            }

            document.getElementsByClassName("trainer_input")[0].focus();
            document.getElementsByClassName("trainer_input")[0].oninput = () => {
                if (alph) {
                    if (document.getElementsByClassName("trainer_input")[0].value.length >= hirasound[document.getElementsByClassName("center_letter")[0].innerText].length) {
                        if (document.getElementsByClassName("trainer_input")[0].value.toLowerCase() == hirasound[document.getElementsByClassName("center_letter")[0].innerText]) {
                            add(arr[getRandomInt(arr.length)], true);
                            right++;
                            document.getElementsByClassName("trainer_stats_right")[0].textContent = right;
                        } else {
                            add(arr[getRandomInt(arr.length)], false);
                            wrong++;
                            document.getElementsByClassName("trainer_stats_wrong")[0].textContent = wrong;
                        }
                        if (Math.floor((right / (right + wrong)) * 100) >= 80) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "green";
                        else if (Math.floor((right / (right + wrong)) * 100) >= 40) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "#CCCC00";
                        else document.getElementsByClassName("trainer_stats_percent")[0].style.color = "darkred";

                        document.getElementsByClassName("trainer_stats_percent")[0].textContent = Math.floor((right / (right + wrong)) * 100) + "%";
                        document.getElementsByClassName("trainer_input")[0].value = "";
                    }
                } else {
                    if (document.getElementsByClassName("trainer_input")[0].value.length >= katasound[document.getElementsByClassName("center_letter")[0].innerText].length) {
                        if (document.getElementsByClassName("trainer_input")[0].value.toLowerCase() == katasound[document.getElementsByClassName("center_letter")[0].innerText]) {
                            add(arr[getRandomInt(arr.length)], true);
                            right++;
                            document.getElementsByClassName("trainer_stats_right")[0].textContent = right;
                        } else {
                            add(arr[getRandomInt(arr.length)], false);
                            wrong++;
                            document.getElementsByClassName("trainer_stats_wrong")[0].textContent = wrong;
                        }
                        if (Math.floor((right / (right + wrong)) * 100) >= 80) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "green";
                        else if (Math.floor((right / (right + wrong)) * 100) >= 40) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "#CCCC00";
                        else document.getElementsByClassName("trainer_stats_percent")[0].style.color = "darkred";

                        document.getElementsByClassName("trainer_stats_percent")[0].textContent = Math.floor((right / (right + wrong)) * 100) + "%";
                        document.getElementsByClassName("trainer_input")[0].value = "";
                    }
                }
            };

            sec = 1;
            interval = setInterval(() => {
                if (sec < 60) document.getElementsByClassName("trainer_stats_time")[0].textContent = sec + " s";
                else if (sec < 3600) {
                    document.getElementsByClassName("trainer_stats_time")[0].textContent = `${Math.floor(sec / 60)} m : ${sec % 60} s`;
                } else {
                    document.getElementsByClassName("trainer_stats_time")[0].textContent = `${Math.floor(sec / 3600)} h : ${Math.floor(
                        (sec - Math.floor(sec / 3600) * 3600) / 60
                    )} m : ${sec % 60} s`;
                }
                document.getElementsByClassName("trainer_stats_perMinute")[0].textContent = `per/min: ${Math.floor((right / sec) * 60)}`;
                sec++;
            }, 1000);
        }
        console.clear();
        console.log(arr);
    };
}

// MIXED

function addHiragana_mixed() {
    document.body.innerHTML += hiragana_mixed;
    addHiraKataMenu_mixed();
    alph = true;

    for (let i = 0; i < document.getElementsByClassName("column_use_mixed").length; i++) {
        document.getElementsByClassName("column_use_mixed")[i].onclick = () => {
            if (document.getElementsByClassName("column_use_mixed")[i].classList.contains("active")) {
                document.getElementsByClassName("column_use_mixed")[i].classList.remove("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use_mixed")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use_mixed")[i].id}`)[j].classList.remove("active");
                }
            } else {
                document.getElementsByClassName("column_use_mixed")[i].classList.add("active");

                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("column_use_mixed")[i].id}`).length; j++) {
                    document.getElementsByClassName(`${document.getElementsByClassName("column_use_mixed")[i].id}`)[j].classList.add("active");
                }
            }
        };
    }

    for (let i = 0; i < document.getElementsByClassName("table_cell_mixed").length; i++) {
        document.getElementsByClassName("table_cell_mixed")[i].onclick = () => {
            if (document.getElementsByClassName("table_cell_mixed")[i].classList.contains("active")) {
                document.getElementsByClassName("table_cell_mixed")[i].classList.remove("active");
                document.getElementById(`${document.getElementsByClassName("table_cell_mixed")[i].classList[1]}`).classList.remove("active");
            } else {
                document.getElementsByClassName("table_cell_mixed")[i].classList.add("active");

                let count = 0;
                for (let j = 0; j < document.getElementsByClassName(`${document.getElementsByClassName("table_cell_mixed")[i].classList[1]}`).length; j++) {
                    if (document.getElementsByClassName(`${document.getElementsByClassName("table_cell_mixed")[i].classList[1]}`)[j].classList[2] === "active") count++;
                }
                if (count == document.getElementsByClassName(`${document.getElementsByClassName("table_cell_mixed")[i].classList[1]}`).length)
                    document.getElementById(`${document.getElementsByClassName("table_cell_mixed")[i].classList[1]}`).classList.add("active");
            }
        };
    }
}

function addHiraKataMenu_mixed() {
    document.body.innerHTML += HiraKataMenu_mixed;
    document.body.innerHTML += HiraKataTrainer;
    document.getElementsByClassName("hira_kata_trainer")[0].innerHTML = "";

    document.getElementsByClassName("HiraKataMenu_Back_mixed")[0].onclick = () => {
        document.getElementsByClassName("table_mixed")[0].outerHTML = "";
        document.getElementsByClassName("HiraKataMenu_mixed")[0].outerHTML = "";
        document.getElementsByClassName("hira_kata_trainer")[0].outerHTML = "";
        if (interval) clearInterval(interval);
        sec = 0;

        addMenu();
    };

    document.getElementsByClassName("HiraKataMenu_Select_mixed")[0].onclick = () => {
        for (let i = 0; i < document.getElementsByClassName("table_cell_mixed").length; i++) {
            document.getElementsByClassName("table_cell_mixed")[i].classList.add("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use_mixed").length; i++) {
            document.getElementsByClassName("column_use_mixed")[i].classList.add("active");
        }
    };

    document.getElementsByClassName("HiraKataMenu_Default_mixed")[0].onclick = () => {
        for (let i = 0; i < document.getElementsByClassName("table_cell_mixed").length; i++) {
            document.getElementsByClassName("table_cell_mixed")[i].classList.remove("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use_mixed").length; i++) {
            document.getElementsByClassName("column_use_mixed")[i].classList.remove("active");
        }
    };

    document.getElementsByClassName("HiraKataMenu_Start_mixed")[0].onclick = () => {
        arr = [];
        right = wrong = 0;

        // clear place
        document.getElementsByClassName("hira_kata_trainer")[0].innerHTML = "";
        // init arr
        for (let i = 0; i < document.getElementsByClassName("table_cell_mixed active").length; i++) {
            arr.push(document.getElementsByClassName("table_cell_mixed active")[i].firstElementChild.textContent);
        }
        // delete active class
        for (let i = 0; i < document.getElementsByClassName("table_cell_mixed").length; i++) {
            document.getElementsByClassName("table_cell_mixed")[i].classList.remove("active");
        }
        for (let i = 0; i < document.getElementsByClassName("column_use_mixed").length; i++) {
            document.getElementsByClassName("column_use_mixed")[i].classList.remove("active");
        }

        if (interval) clearInterval(interval);
        sec = 0;

        if (arr.length) {
            document.getElementsByClassName("hira_kata_trainer")[0].outerHTML = HiraKataTrainer;
            // add 4 voids
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell_mixed">
                    <div class="hira_kata_trainer_letter_mixed"></div>
                </div>`;
            }
            // add center element
            document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell_mixed center_cell_mixed">
                    <div class="hira_kata_trainer_letter_mixed center_letter_mixed">${arr[getRandomInt(arr.length)]}</div>
                </div>`;
            // add last 4 elements
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
                <div class="hira_kata_trainer_cell_mixed">
                    <div class="hira_kata_trainer_letter_mixed">${arr[getRandomInt(arr.length)]}</div>
                </div>`;
            }

            document.getElementsByClassName("trainer_input")[0].focus();
            document.getElementsByClassName("trainer_input")[0].oninput = () => {
                if (alph) {
                    if (
                        document.getElementsByClassName("trainer_input")[0].value.length >=
                        hirasound_mixed[document.getElementsByClassName("center_letter_mixed")[0].innerText].length
                    ) {
                        if (
                            document.getElementsByClassName("trainer_input")[0].value.toLowerCase() ==
                            hirasound_mixed[document.getElementsByClassName("center_letter_mixed")[0].innerText]
                        ) {
                            add_mixed(arr[getRandomInt(arr.length)], true);
                            right++;
                            document.getElementsByClassName("trainer_stats_right")[0].textContent = right;
                        } else {
                            add_mixed(arr[getRandomInt(arr.length)], false);
                            wrong++;
                            document.getElementsByClassName("trainer_stats_wrong")[0].textContent = wrong;
                        }
                        if (Math.floor((right / (right + wrong)) * 100) >= 80) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "green";
                        else if (Math.floor((right / (right + wrong)) * 100) >= 40) document.getElementsByClassName("trainer_stats_percent")[0].style.color = "#CCCC00";
                        else document.getElementsByClassName("trainer_stats_percent")[0].style.color = "darkred";

                        document.getElementsByClassName("trainer_stats_percent")[0].textContent = Math.floor((right / (right + wrong)) * 100) + "%";
                        document.getElementsByClassName("trainer_input")[0].value = "";
                    }
                }
            };

            sec = 1;
            interval = setInterval(() => {
                if (sec < 60) document.getElementsByClassName("trainer_stats_time")[0].textContent = sec + " s";
                else if (sec < 3600) {
                    document.getElementsByClassName("trainer_stats_time")[0].textContent = `${Math.floor(sec / 60)} m : ${sec % 60} s`;
                } else {
                    document.getElementsByClassName("trainer_stats_time")[0].textContent = `${Math.floor(sec / 3600)} h : ${Math.floor(
                        (sec - Math.floor(sec / 3600) * 3600) / 60
                    )} m : ${sec % 60} s`;
                }
                document.getElementsByClassName("trainer_stats_perMinute")[0].textContent = `per/min: ${Math.floor((right / sec) * 60)}`;
                sec++;
            }, 1000);
        }
        console.clear();
        console.log(arr);
    };
}

function add_mixed(elem = "ふ", col = true) {
    document.getElementsByClassName("hira_kata_trainer_cell_mixed")[0].outerHTML = "";
    document.getElementsByClassName("center_cell_mixed")[0].classList.remove("center_cell_mixed");
    document.getElementsByClassName("center_letter_mixed")[0].classList.remove("center_letter_mixed");

    document.getElementsByClassName("hira_kata_trainer_place")[0].innerHTML += `
        <div class="hira_kata_trainer_cell_mixed">
            <div class="hira_kata_trainer_letter_mixed">${elem}</div>
        </div>`;

    document.getElementsByClassName("hira_kata_trainer_cell_mixed")[4].classList.add("center_cell_mixed");
    document.getElementsByClassName("hira_kata_trainer_cell_mixed")[4].firstElementChild.classList.add("center_letter_mixed");

    if (col) document.getElementsByClassName("hira_kata_trainer_cell_mixed")[3].firstElementChild.style.color = "green";
    else document.getElementsByClassName("hira_kata_trainer_cell_mixed")[3].firstElementChild.style.color = "darkred";
}

// MIXED

addMenu();
