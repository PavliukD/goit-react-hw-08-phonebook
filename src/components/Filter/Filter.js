import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/phonebook/phonebook-actions'
import {getFilter} from '../../redux/phonebook/phonebook-selectors'
import s from './Filter.module.css'

export default function Filter(){
    const value = useSelector(getFilter)
    const dispatch = useDispatch()

    return(
        <>
        <h3>Find contacts by name</h3>
          <input
                type="text"
                name="filter"
                onChange = {(event) => dispatch(actions.filterContacts(event.target.value))}
                value = {value}
                className={s.input}
            />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}