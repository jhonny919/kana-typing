var menu = `
<div class="start_menu">
  <div class="start_menu_alphabets">
    <div class="start_menu_hiragana">
      <div class="start_menu_hiragana_icon">あ</div>
      <div class="start_menu_hiragana_text">HIRAGANA</div>
    </div>
    <div class="start_menu_katakana">
      <div class="start_menu_katakana_icon">ア</div>
      <div class="start_menu_katakana_text">KATAKANA</div>
    </div>
  </div>
  <div class="start_menu_mixed">
    <div class="start_menu_mixed_text">
      ひらがな <span class="MIXED">MIXED</span> カタカナ
    </div>
  </div>
</div>`;

var hiragana = `
<div class="table">
    <div class="table_row_up">
        <div class="column_void"></div>
        <div class="column_use" id="tc1">▼</div>
        <div class="column_use" id="tc2">▼</div>
        <div class="column_use" id="tc3">▼</div>
        <div class="column_use" id="tc4">▼</div>
        <div class="column_use" id="tc5">▼</div>
        <div class="column_use" id="tc6">▼</div>
        <div class="column_use" id="tc7">▼</div>
        <div class="column_use" id="tc8">▼</div>
        <div class="column_use" id="tc9">▼</div>
        <div class="column_use" id="tc10">▼</div>
        <div class="column_void"></div>
        <div class="column_use" id="tc11">▼</div>
        <div class="column_use" id="tc12">▼</div>
        <div class="column_use" id="tc13">▼</div>
        <div class="column_use" id="tc14">▼</div>
        <div class="column_use" id="tc15">▼</div>
    </div>
    <div class="table_row">
        <!--1-->
        <div class="table_void"></div>
        <div class="table_cell tc1">
            <div class="table_cell_jp">わ</div>
            <div class="table_cell_eng">wa</div>
        </div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">ら</div>
            <div class="table_cell_eng">ra</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">や</div>
            <div class="table_cell_eng">ya</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">ま</div>
            <div class="table_cell_eng">ma</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">は</div>
            <div class="table_cell_eng">ha</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">な</div>
            <div class="table_cell_eng">na</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">た</div>
            <div class="table_cell_eng">ta</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">さ</div>
            <div class="table_cell_eng">sa</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">か</div>
            <div class="table_cell_eng">ka</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">あ</div>
            <div class="table_cell_eng">a</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ぱ</div>
            <div class="table_cell_eng">pa</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ば</div>
            <div class="table_cell_eng">ba</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">だ</div>
            <div class="table_cell_eng">da</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ざ</div>
            <div class="table_cell_eng">za</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">が</div>
            <div class="table_cell_eng">ga</div>
        </div>
    </div>
    <!--1-->
    <div class="table_row">
        <!--2-->
        <div class="table_void"></div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">り</div>
            <div class="table_cell_eng">ri</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">み</div>
            <div class="table_cell_eng">mi</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ひ</div>
            <div class="table_cell_eng">hi</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">に</div>
            <div class="table_cell_eng">ni</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">ち</div>
            <div class="table_cell_eng">chi</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">し</div>
            <div class="table_cell_eng">shi</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">き</div>
            <div class="table_cell_eng">ki</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">い</div>
            <div class="table_cell_eng">i</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ぴ</div>
            <div class="table_cell_eng">pi</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">び</div>
            <div class="table_cell_eng">bi</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ぢ</div>
            <div class="table_cell_eng">ji</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">じ</div>
            <div class="table_cell_eng">ji</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ぎ</div>
            <div class="table_cell_eng">gi</div>
        </div>
    </div>
    <!--2-->
    <div class="table_row">
        <!--3-->
        <div class="table_cell">
            <div class="table_cell_jp">ん</div>
            <div class="table_cell_eng">n</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">る</div>
            <div class="table_cell_eng">ru</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">ゆ</div>
            <div class="table_cell_eng">yu</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">む</div>
            <div class="table_cell_eng">mu</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ふ</div>
            <div class="table_cell_eng">fu</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ぬ</div>
            <div class="table_cell_eng">nu</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">つ</div>
            <div class="table_cell_eng">tsu</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">す</div>
            <div class="table_cell_eng">su</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">く</div>
            <div class="table_cell_eng">ku</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">う</div>
            <div class="table_cell_eng">u</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ぷ</div>
            <div class="table_cell_eng">pu</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ぶ</div>
            <div class="table_cell_eng">bu</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">づ</div>
            <div class="table_cell_eng">du</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ず</div>
            <div class="table_cell_eng">zu</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ぐ</div>
            <div class="table_cell_eng">gu</div>
        </div>
    </div>
    <!--3-->
    <div class="table_row">
        <!--4-->
        <div class="table_void"></div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">れ</div>
            <div class="table_cell_eng">re</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">め</div>
            <div class="table_cell_eng">me</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">へ</div>
            <div class="table_cell_eng">he</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ね</div>
            <div class="table_cell_eng">ne</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">て</div>
            <div class="table_cell_eng">te</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">せ</div>
            <div class="table_cell_eng">se</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">け</div>
            <div class="table_cell_eng">ke</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">え</div>
            <div class="table_cell_eng">e</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ぺ</div>
            <div class="table_cell_eng">pe</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">べ</div>
            <div class="table_cell_eng">be</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">で</div>
            <div class="table_cell_eng">de</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ぜ</div>
            <div class="table_cell_eng">ze</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">げ</div>
            <div class="table_cell_eng">ge</div>
        </div>
    </div>
    <!--4-->
    <div class="table_row">
        <!--5-->
        <div class="table_void"></div>
        <div class="table_cell tc1">
            <div class="table_cell_jp">を</div>
            <div class="table_cell_eng">wo</div>
        </div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">ろ</div>
            <div class="table_cell_eng">ro</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">よ</div>
            <div class="table_cell_eng">yo</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">も</div>
            <div class="table_cell_eng">mo</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ほ</div>
            <div class="table_cell_eng">ho</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">の</div>
            <div class="table_cell_eng">no</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">と</div>
            <div class="table_cell_eng">to</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">そ</div>
            <div class="table_cell_eng">so</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">こ</div>
            <div class="table_cell_eng">ko</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">お</div>
            <div class="table_cell_eng">o</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ぽ</div>
            <div class="table_cell_eng">po</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ぼ</div>
            <div class="table_cell_eng">bo</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ど</div>
            <div class="table_cell_eng">do</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ぞ</div>
            <div class="table_cell_eng">zo</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ご</div>
            <div class="table_cell_eng">go</div>
        </div>
    </div>
    <!--5-->
</div>`;

var katakana = `
<div class="table">
    <div class="table_row_up">
        <div class="column_void"></div>
        <div class="column_use" id="tc1">▼</div>
        <div class="column_use" id="tc2">▼</div>
        <div class="column_use" id="tc3">▼</div>
        <div class="column_use" id="tc4">▼</div>
        <div class="column_use" id="tc5">▼</div>
        <div class="column_use" id="tc6">▼</div>
        <div class="column_use" id="tc7">▼</div>
        <div class="column_use" id="tc8">▼</div>
        <div class="column_use" id="tc9">▼</div>
        <div class="column_use" id="tc10">▼</div>
        <div class="column_void"></div>
        <div class="column_use" id="tc11">▼</div>
        <div class="column_use" id="tc12">▼</div>
        <div class="column_use" id="tc13">▼</div>
        <div class="column_use" id="tc14">▼</div>
        <div class="column_use" id="tc15">▼</div>
    </div>
    <div class="table_row">
        <!--1-->
        <div class="table_void"></div>
        <div class="table_cell tc1">
            <div class="table_cell_jp">ワ</div>
            <div class="table_cell_eng">wa</div>
        </div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">ラ</div>
            <div class="table_cell_eng">ra</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">ヤ</div>
            <div class="table_cell_eng">ya</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">マ</div>
            <div class="table_cell_eng">ma</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ハ</div>
            <div class="table_cell_eng">ha</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ナ</div>
            <div class="table_cell_eng">na</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">タ</div>
            <div class="table_cell_eng">ta</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">サ</div>
            <div class="table_cell_eng">sa</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">カ</div>
            <div class="table_cell_eng">ka</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">ア</div>
            <div class="table_cell_eng">a</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">パ</div>
            <div class="table_cell_eng">pa</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">バ</div>
            <div class="table_cell_eng">ba</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ダ</div>
            <div class="table_cell_eng">da</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ザ</div>
            <div class="table_cell_eng">za</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ガ</div>
            <div class="table_cell_eng">ga</div>
        </div>
    </div>
    <!--1-->
    <div class="table_row">
        <!--2-->
        <div class="table_void"></div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">リ</div>
            <div class="table_cell_eng">ri</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">ミ</div>
            <div class="table_cell_eng">mi</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ヒ</div>
            <div class="table_cell_eng">hi</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ニ</div>
            <div class="table_cell_eng">ni</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">チ</div>
            <div class="table_cell_eng">chi</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">シ</div>
            <div class="table_cell_eng">shi</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">キ</div>
            <div class="table_cell_eng">ki</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">イ</div>
            <div class="table_cell_eng">i</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ピ</div>
            <div class="table_cell_eng">pi</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ビ</div>
            <div class="table_cell_eng">bi</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ヂ</div>
            <div class="table_cell_eng">ji</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ジ</div>
            <div class="table_cell_eng">ji</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ギ</div>
            <div class="table_cell_eng">gi</div>
        </div>
    </div>
    <!--2-->
    <div class="table_row">
        <!--3-->
        <div class="table_cell">
            <div class="table_cell_jp">ン</div>
            <div class="table_cell_eng">n</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">ル</div>
            <div class="table_cell_eng">ru</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">ユ</div>
            <div class="table_cell_eng">yu</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">ム</div>
            <div class="table_cell_eng">mu</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">フ</div>
            <div class="table_cell_eng">fu</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ヌ</div>
            <div class="table_cell_eng">nu</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">ツ</div>
            <div class="table_cell_eng">tsu</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">ス</div>
            <div class="table_cell_eng">su</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">ク</div>
            <div class="table_cell_eng">ku</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">ウ</div>
            <div class="table_cell_eng">u</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">プ</div>
            <div class="table_cell_eng">pu</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ブ</div>
            <div class="table_cell_eng">bu</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ヅ</div>
            <div class="table_cell_eng">du</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ズ</div>
            <div class="table_cell_eng">zu</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">グ</div>
            <div class="table_cell_eng">gu</div>
        </div>
    </div>
    <!--3-->
    <div class="table_row">
        <!--4-->
        <div class="table_void"></div>
        <div class="table_void"></div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">レ</div>
            <div class="table_cell_eng">re</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">メ</div>
            <div class="table_cell_eng">me</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ヘ</div>
            <div class="table_cell_eng">he</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ネ</div>
            <div class="table_cell_eng">ne</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">テ</div>
            <div class="table_cell_eng">te</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">セ</div>
            <div class="table_cell_eng">se</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">ケ</div>
            <div class="table_cell_eng">ke</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">エ</div>
            <div class="table_cell_eng">e</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ペ</div>
            <div class="table_cell_eng">pe</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ベ</div>
            <div class="table_cell_eng">be</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">デ</div>
            <div class="table_cell_eng">de</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ゼ</div>
            <div class="table_cell_eng">ze</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ゲ</div>
            <div class="table_cell_eng">ge</div>
        </div>
    </div>
    <!--4-->
    <div class="table_row">
        <!--5-->
        <div class="table_void"></div>
        <div class="table_cell tc1">
            <div class="table_cell_jp">ヲ</div>
            <div class="table_cell_eng">wo</div>
        </div>
        <div class="table_cell tc2">
            <div class="table_cell_jp">ロ</div>
            <div class="table_cell_eng">ro</div>
        </div>
        <div class="table_cell tc3">
            <div class="table_cell_jp">ヨ</div>
            <div class="table_cell_eng">yo</div>
        </div>
        <div class="table_cell tc4">
            <div class="table_cell_jp">モ</div>
            <div class="table_cell_eng">mo</div>
        </div>
        <div class="table_cell tc5">
            <div class="table_cell_jp">ホ</div>
            <div class="table_cell_eng">ho</div>
        </div>
        <div class="table_cell tc6">
            <div class="table_cell_jp">ノ</div>
            <div class="table_cell_eng">no</div>
        </div>
        <div class="table_cell tc7">
            <div class="table_cell_jp">ト</div>
            <div class="table_cell_eng">to</div>
        </div>
        <div class="table_cell tc8">
            <div class="table_cell_jp">ソ</div>
            <div class="table_cell_eng">so</div>
        </div>
        <div class="table_cell tc9">
            <div class="table_cell_jp">コ</div>
            <div class="table_cell_eng">ko</div>
        </div>
        <div class="table_cell tc10">
            <div class="table_cell_jp">オ</div>
            <div class="table_cell_eng">o</div>
        </div>
        <div class="table_void"></div>
        <div class="table_cell tc11">
            <div class="table_cell_jp">ポ</div>
            <div class="table_cell_eng">po</div>
        </div>
        <div class="table_cell tc12">
            <div class="table_cell_jp">ボ</div>
            <div class="table_cell_eng">bo</div>
        </div>
        <div class="table_cell tc13">
            <div class="table_cell_jp">ド</div>
            <div class="table_cell_eng">do</div>
        </div>
        <div class="table_cell tc14">
            <div class="table_cell_jp">ゾ</div>
            <div class="table_cell_eng">zo</div>
        </div>
        <div class="table_cell tc15">
            <div class="table_cell_jp">ゴ</div>
            <div class="table_cell_eng">go</div>
        </div>
    </div>
    <!--5-->
</div>`;

var HiraKataMenu = `
    <div class="HiraKataMenu">
      <div class="HiraKataMenu_Back HiraKataMenu_button">← Back</div>
      <div class="HiraKataMenu_Select HiraKataMenu_button">Select All</div>
      <div class="HiraKataMenu_Default HiraKataMenu_button">Default All</div>
      <div class="HiraKataMenu_Start HiraKataMenu_button">Start</div>
    </div>
`;

var HiraKataTrainer = `
<div class="hira_kata_trainer">
    <div class="hira_kata_trainer_place">
        <div class="hira_kata_trainer_arrow">▼</div>
    </div>
    <div class="hira_kata_trainer_stats">
        <div class="trainer_stats_title">STATS</div>
        <div class="trainer_stats_right_cell">
            <div class="trainer_stats_right_title">RIGHT</div>
            <div class="trainer_stats_right">0</div>
        </div>
        <div class="trainer_stats_wrong_cell">
            <div class="trainer_stats_wrong_title">WRONG</div>
            <div class="trainer_stats_wrong">0</div>
        </div>
        <div class="trainer_stats_percent">42%</div>
        <div class="trainer_stats_time"></div>
        <div class="trainer_stats_perMinute"></div>
    </div>
    <div class="hira_kata_trainer_input">
        <input type="text" class="trainer_input" />
    </div>
</div>
`;

var hiragana_mixed = `
<div class="table_mixed">
            <div class="table_row_up_mixed">
                <div class="column_use_mixed" id="tc1">▼</div>
                <div class="column_use_mixed" id="tc2">▼</div>
                <div class="column_use_mixed" id="tc3">▼</div>
                <div class="column_use_mixed" id="tc4">▼</div>
                <div class="column_use_mixed" id="tc5">▼</div>
                <div class="column_use_mixed" id="tc6">▼</div>
                <div class="column_void_mixed"></div>
                <div class="column_void_mixed"></div>
                <div class="column_void_mixed"></div>
                <div class="column_use_mixed" id="tc7">▼</div>
                <div class="column_use_mixed" id="tc8">▼</div>
                <div class="column_use_mixed" id="tc9">▼</div>
                <div class="column_use_mixed" id="tc10">▼</div>
                <div class="column_use_mixed" id="tc11">▼</div>
                <div class="column_use_mixed" id="tc12">▼</div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">ちぇ</div>
                    <div class="table_cell_eng_mixed">che</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">じゃ</div>
                    <div class="table_cell_eng_mixed">ja</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">みゃ</div>
                    <div class="table_cell_eng_mixed">mya</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">びゃ</div>
                    <div class="table_cell_eng_mixed">bya</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">にゃ</div>
                    <div class="table_cell_eng_mixed">nya</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">きゃ</div>
                    <div class="table_cell_eng_mixed">kya</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">チェ</div>
                    <div class="table_cell_eng_mixed">che</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">ジャ</div>
                    <div class="table_cell_eng_mixed">ja</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">ミャ</div>
                    <div class="table_cell_eng_mixed">mya</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ビャ</div>
                    <div class="table_cell_eng_mixed">bya</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ニャ</div>
                    <div class="table_cell_eng_mixed">nya</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">キャ</div>
                    <div class="table_cell_eng_mixed">kya</div>
                </div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">ちょ</div>
                    <div class="table_cell_eng_mixed">cho</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">じゅ</div>
                    <div class="table_cell_eng_mixed">ju</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">みゅ</div>
                    <div class="table_cell_eng_mixed">myu</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">びゃ</div>
                    <div class="table_cell_eng_mixed">byu</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">にゃ</div>
                    <div class="table_cell_eng_mixed">nyu</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">きゅ</div>
                    <div class="table_cell_eng_mixed">kyu</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">チョ</div>
                    <div class="table_cell_eng_mixed">cho</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">ジュ</div>
                    <div class="table_cell_eng_mixed">ju</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">ミュ</div>
                    <div class="table_cell_eng_mixed">myu</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ビャ</div>
                    <div class="table_cell_eng_mixed">byu</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ニャ</div>
                    <div class="table_cell_eng_mixed">nyu</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">キュ</div>
                    <div class="table_cell_eng_mixed">kyu</div>
                </div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">しゃ</div>
                    <div class="table_cell_eng_mixed">sha</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">じえ</div>
                    <div class="table_cell_eng_mixed">je</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">みょ</div>
                    <div class="table_cell_eng_mixed">myo</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">びょ</div>
                    <div class="table_cell_eng_mixed">byo</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">にょ</div>
                    <div class="table_cell_eng_mixed">nyo</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">きょ</div>
                    <div class="table_cell_eng_mixed">kyo</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">シャ</div>
                    <div class="table_cell_eng_mixed">sha</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">ジエ</div>
                    <div class="table_cell_eng_mixed">je</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">ミョ</div>
                    <div class="table_cell_eng_mixed">myo</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ビョ</div>
                    <div class="table_cell_eng_mixed">byo</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ニョ</div>
                    <div class="table_cell_eng_mixed">nyo</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">キョ</div>
                    <div class="table_cell_eng_mixed">kyo</div>
                </div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">しゅ</div>
                    <div class="table_cell_eng_mixed">shu</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">じょ</div>
                    <div class="table_cell_eng_mixed">jo</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">りゃ</div>
                    <div class="table_cell_eng_mixed">rya</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">ぴゃ</div>
                    <div class="table_cell_eng_mixed">pya</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">ひゃ</div>
                    <div class="table_cell_eng_mixed">hya</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">ぎゃ</div>
                    <div class="table_cell_eng_mixed">gya</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">シュ</div>
                    <div class="table_cell_eng_mixed">shu</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">ジョ</div>
                    <div class="table_cell_eng_mixed">jo</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">リャ</div>
                    <div class="table_cell_eng_mixed">rya</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ピャ</div>
                    <div class="table_cell_eng_mixed">pya</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ヒャ</div>
                    <div class="table_cell_eng_mixed">hya</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">ギャ</div>
                    <div class="table_cell_eng_mixed">gya</div>
                </div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">しぇ</div>
                    <div class="table_cell_eng_mixed">she</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">ちゃ</div>
                    <div class="table_cell_eng_mixed">cha</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">りゅ</div>
                    <div class="table_cell_eng_mixed">ryu</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">ぴゅ</div>
                    <div class="table_cell_eng_mixed">pyu</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">ひゅ</div>
                    <div class="table_cell_eng_mixed">hyu</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">ぎゅ</div>
                    <div class="table_cell_eng_mixed">gyu</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">シェ</div>
                    <div class="table_cell_eng_mixed">she</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">チャ</div>
                    <div class="table_cell_eng_mixed">cha</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">リュ</div>
                    <div class="table_cell_eng_mixed">ryu</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ピュ</div>
                    <div class="table_cell_eng_mixed">pyu</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ヒュ</div>
                    <div class="table_cell_eng_mixed">hyu</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">ギュ</div>
                    <div class="table_cell_eng_mixed">gyu</div>
                </div>
            </div>
            <div class="table_row_mixed">
                <div class="table_cell_mixed tc1">
                    <div class="table_cell_jp_mixed">しょ</div>
                    <div class="table_cell_eng_mixed">sho</div>
                </div>
                <div class="table_cell_mixed tc2">
                    <div class="table_cell_jp_mixed">ちゅ</div>
                    <div class="table_cell_eng_mixed">chu</div>
                </div>
                <div class="table_cell_mixed tc3">
                    <div class="table_cell_jp_mixed">りゅ</div>
                    <div class="table_cell_eng_mixed">ryu</div>
                </div>
                <div class="table_cell_mixed tc4">
                    <div class="table_cell_jp_mixed">ぴょ</div>
                    <div class="table_cell_eng_mixed">pyo</div>
                </div>
                <div class="table_cell_mixed tc5">
                    <div class="table_cell_jp_mixed">ひょ</div>
                    <div class="table_cell_eng_mixed">hyo</div>
                </div>
                <div class="table_cell_mixed tc6">
                    <div class="table_cell_jp_mixed">ぎょ</div>
                    <div class="table_cell_eng_mixed">gyo</div>
                </div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_void_mixed"></div>
                <div class="table_cell_mixed tc7">
                    <div class="table_cell_jp_mixed">ショ</div>
                    <div class="table_cell_eng_mixed">sho</div>
                </div>
                <div class="table_cell_mixed tc8">
                    <div class="table_cell_jp_mixed">チュ</div>
                    <div class="table_cell_eng_mixed">chu</div>
                </div>
                <div class="table_cell_mixed tc9">
                    <div class="table_cell_jp_mixed">リュ</div>
                    <div class="table_cell_eng_mixed">ryu</div>
                </div>
                <div class="table_cell_mixed tc10">
                    <div class="table_cell_jp_mixed">ピョ</div>
                    <div class="table_cell_eng_mixed">pyo</div>
                </div>
                <div class="table_cell_mixed tc11">
                    <div class="table_cell_jp_mixed">ヒョ</div>
                    <div class="table_cell_eng_mixed">hyo</div>
                </div>
                <div class="table_cell_mixed tc12">
                    <div class="table_cell_jp_mixed">ギョ</div>
                    <div class="table_cell_eng_mixed">gyo</div>
                </div>
            </div>
        </div>
`;

var HiraKataMenu_mixed = `
<div class="HiraKataMenu_mixed">
    <div class="HiraKataMenu_Back_mixed HiraKataMenu_button_mixed">← Back</div>
    <div class="HiraKataMenu_Select_mixed HiraKataMenu_button_mixed">Select All</div>
    <div class="HiraKataMenu_Default_mixed HiraKataMenu_button_mixed">Default All</div>
    <div class="HiraKataMenu_Start_mixed HiraKataMenu_button_mixed">Start</div>
</div>
`;
