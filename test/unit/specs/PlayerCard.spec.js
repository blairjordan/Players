import Vue from 'vue'
import PlayerCard from '@/components/PlayerCard'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

const defaultProps = {
  firstname: 'Jeremy',
  lastname: 'Fisher',
  team: 'Team1',
  position: 'Centre',
  playerNumber: 44,
  bio: 'This guy is pretty amazing.',
  imageUrl: 'http://placehold.it/120x120&text=image1',
  games: [
    { 'game': 1, 'throws': 8, 'kicks': 16, 'backflips': 5 },
    { 'game': 2, 'throws': 14, 'kicks': 2, 'backflips': 14 }
  ]
}

describe('PlayerCard.vue', () => {
  it('correctly generates a team id', () => {
    const Constructor = Vue.extend(PlayerCard)
    const vm = new Constructor({ propsData: defaultProps }).$mount()
    //expect(typeof vm.getTeamId).to.equal('function')
    expect(vm.getTeamId()).to.equal('Team1')
  })

  it('generates an image path from team definitions', () => {
    const Constructor = Vue.extend(PlayerCard)
    const vm = new Constructor({ propsData: defaultProps }).$mount()
    //expect(typeof vm.getTeamImage).to.equal('function')
    expect(vm.getTeamImage()).not.to.be.empty
    expect(vm.teamIcon).not.to.be.empty
  })

  it('generates a background color from team definitions', () => {
    const Constructor = Vue.extend(PlayerCard)
    const vm = new Constructor({ propsData: defaultProps }).$mount()
    //expect(typeof vm.getTeamBg).to.equal('function')
    expect(vm.getTeamBg()).to.equal('#5f170d')
    expect(vm.teamBg).not.to.be.empty
  })

  it('should render correct header', () => {
    const Constructor = Vue.extend(PlayerCard)
    const vm = new Constructor({ propsData: defaultProps }).$mount()

    expect(vm.$el.querySelector('.player-firstname').innerHTML).to.equal('Jeremy')
    expect(vm.$el.querySelector('.player-lastname').innerHTML).to.equal('Fisher')
    expect(vm.$el.querySelector('.player-number').innerHTML).to.equal('44')
  })
})
