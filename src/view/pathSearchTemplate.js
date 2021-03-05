const PATH_SEARCH_MANAGER_PAGE_TEMPLATE = 
`
<h1>지하철 길찾기</h1>
<label>
  출발역
  <input id="departure-station-name-input" />
</label>
<br />

<label>
  도착역
  <input id="arrival-station-name-input" />
</label>
<br />

<input type="radio" name="search-type" value="distance" checked="checked" />최단거리
<input type="radio" name="search-type" value="time" />최소시간
<br />

<button id="search-button">길찾기</button>

<div>
  <h2>결과</h2>
  <label></label>

  <table id="result-table" border="1">
    <thead>
      <th>총 거리</th>
      <th>총 소요 시간</th>
    </thead>
    <tbody></tbody>
  </table>
</div>
`

export {PATH_SEARCH_MANAGER_PAGE_TEMPLATE}