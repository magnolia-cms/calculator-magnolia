[#-------------- ASSIGNMENTS --------------]
[#assign componentId = content.componentId!"calculator-"+content.@id]

[#-------------- RENDERING  --------------]
<div id="${componentId}" class="calculator">
  <h2>${content.title!}</h2>

  <label>
    ${content.value1!}
    <input class="calculator__value1"/>
  </label>

  <label>
    ${content.value2!}
    <input class="calculator__value2"/>
  </label>

  <input
    data-formula="${content.formula!}"
    disabled="true"
    class="calculator__result" />
</div>

<script>
(function (window, $) {
  $(document).ready(function () {
    var id = '#${componentId!}'
    new window.MgnlCalculator(id)
  })
})(window, jQuery)
</script>
