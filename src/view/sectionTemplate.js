const SECTION_MANAGER_PAGE_TEMPLATE =
`<section class="section-buttons-container">
  <h3>구간을 수정할 노선을 선택해주세요</h3>
  <nav class="line-buttons"></nav>
</section>
<section id="section-selector-container"></section>
<section id="section-register-container"></section> </br>
<section id="section-show-container">
  
</section>`;

const SECTION_TABLE_BODY =
`
<table border="1">
  <thead>
    <tr>
      <th>순서</th>
      <th>이름</th>
      <th>설정</th>
    </tr>
  </thead>
  <tbody class="section-table-body">
  </tbody>
</table>
`;

const SECTION_REGISTER_FORM_TEMPLATE = 
`
<h3 id="line-title"></h3>
<h4>구간 등록</h4>
<label for="section-distance">구간 거리</label>
<input type="text" id="section-distance">
</select>
<br />
<label for="duration-time">소요 시간</label>
<input type="text" id="duration-time">
</select>
<br />
<select name="start-station" id="section-station-selector"></select>
<input type="number" id="section-order-input" placeholder="순서">
<button id="section-add-button">등록</button>
<br />

`;

export {SECTION_MANAGER_PAGE_TEMPLATE, SECTION_REGISTER_FORM_TEMPLATE, SECTION_TABLE_BODY};