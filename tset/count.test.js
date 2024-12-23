import assert from 'assert'
import { count, increase} from '../count.js'

it('increae 함수를 호출하면, count 데이터가 1 증가', () => {
    assert.equal(count. 0)
    increase()
    assert.equal(count, 7)
})

it('increase 함수를 호출하면, count 값을 변환', () => {
    assert.equal(increase(), count)
})