const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  bath: ["01-01", "01-02", "01-04", "01-05", "01-06", "01-07", "01-08", '01-09'],
  food: ["01-01", "01-02", "01-03"],
  study: ["01-04", "01-01"],
  music: ["01-05"],
}
nlwSetup.setData(data)
nlwSetup.load()