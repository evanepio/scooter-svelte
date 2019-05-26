<script>
  export let name;
</script>

<style>
  div {
    display: table;
    width: 150px;
    height: 150px;
    background: white;
    border: 8px solid #7c4726;
    border-radius: 50%;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
  }

  span {
    display: table-cell;
    vertical-align: middle;
  }
</style>

<div>
  <span>{name}</span>
</div>
