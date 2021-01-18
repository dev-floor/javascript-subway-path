const LINE_MANAGER_PAGE_TEMPLATE = `<section class="line-registration">
    <p><strong>노선 이름</strong></p>
    <input type="text" id="line-name-input" placeholder="노선 이름을 입력해주세요">
    <div class="select-line-points">
      <label for="line-start-station-selector">상행 종점</label>
      <select name="start-station" id="line-start-station-selector">
      </select>
      <br />
      <label for="line-end-station-selector">하행 종점</label>
      <select name="end-station" id="line-end-station-selector">
      </select>
      <br />
      <label for="line-end-station-selector">구간 거리</label>
      <select name="end-station" id="line-end-station-selector">
      </select>
      <br />
      <label for="line-end-station-selector">소요 시간</label>
      <select name="end-station" id="line-end-station-selector">
      </select>
    </div>
    <button id="line-add-button">노선 추가</button>
  </section>
  <section class="line-table">
    <table border="1">
      <h2>🚉 지하철 노선 목록</h2>
      <thead>
        <tr>
          <th>노선 이름</th>
          <th>상행 종점역</th>
          <th>하행 종점역</th>
          <th>설정</th>
        </tr>
      </thead>
      <tbody class="line-table-tbody"></tbody>
    </table>
  </section>`;

export {LINE_MANAGER_PAGE_TEMPLATE};