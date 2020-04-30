import React, { useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import COUNTRY_QUERY from '../graphql/queries/COUNTRY_QUERY.graphql'
import SELECTED_COUNTRY from '../graphql/queries/SELECTED_COUNTRY.graphql'

const CountrySelect = () => {
    const { data, loading, error, refetch } = useQuery(COUNTRY_QUERY)
    const onClickRefetch = useCallback(() => { refetch() }, [refetch])
    const { data: { countrySelected } = {}, client } = useQuery(SELECTED_COUNTRY)
    const onChangeContry = (e) => { client.writeData({ data: { countrySelected: e.target.value } }) }
    
    return (<><button onClick={onClickRefetch}> refetch </button>
        <select onChange={onChangeContry} value={countrySelected}>
            <option value={''}>SelectOne</option>
            {!loading && !error &&
                data.countries.map(country => <option value={country.code}>{country.name}</option>)
            }
        </select>
    </>)
}

export default CountrySelect