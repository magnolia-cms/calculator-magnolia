// import $ from 'jquery'


class MgnlCalculator {

  constructor (selector) {
    this.selector = selector
    this.$el = $(this.selector)

    this.$value1Field = this.$el.find('.calculator__value1')
    this.$value2Field = this.$el.find('.calculator__value2')
    this.$resultField = this.$el.find('.calculator__result')
    this.formula = this.$resultField.attr('data-formula')

    this.registerListeners()
    this.render()
  }

  parseFormula (formula, a, b) {
    if (a === '' || Number.isNaN(+a)) return null
    if (b === '' || Number.isNaN(+b)) return null

    return formula
      .replace('[A]', a)
      .replace('[B]', b)
  }

  registerListeners () {
    this.$value1Field.on('keyup', this.render.bind(this))
    this.$value2Field.on('keyup', this.render.bind(this))
  }

  render () {
    const renderedFormula = this.parseFormula(
      this.formula,
      this.$value1Field.val(),
      this.$value2Field.val()
    )

    let res = 0
    if (renderedFormula) {
      res = eval(renderedFormula)
    }

    this.$resultField.val(res)
  }
}

export default MgnlCalculator
