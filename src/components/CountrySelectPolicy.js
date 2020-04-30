import React, { useCallback, useState } from 'react'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import COUNTRY_QUERY from '../graphql/queries/COUNTRY_QUERY.graphql'
import { FetchType } from 'apollo-boost'
import SELECTED_COUNTRY from '../graphql/queries/SELECTED_COUNTRY.graphql'

const fetchPolicies = ['cache-and-network', 'cache-first' , 'network-only' , 'cache-only' , 'no-cache' , 'standby']

const CountrySelectPolicy = () => {
    const [fetchPolicy, setFetchPolicy] = useState(fetchPolicies[0])
    const { data, loading, error, refetch } = useQuery(COUNTRY_QUERY, { fetchPolicy })
    const {data:{countrySelected} ={}, client} = useQuery(SELECTED_COUNTRY)
    const onClickRefetch = useCallback(() => { refetch() }, [refetch])
    const onChangeFetchPolicy = (e) => { setFetchPolicy(e.target.value)}
    const onChangeContry = (e) => { client.writeData({data: {countrySelected: e.target.value}}) }

    return (<>
        <button onClick={onClickRefetch} disabled={fetchPolicy === fetchPolicies[3]}> refetch </button>
        <label>
            Countries
        </label>
        <select onChange={onChangeContry} value={countrySelected}>
            <option value={''}>SelectOne</option>
            {!loading && !error &&
                data && data.countries && data.countries.map(country =>
                    <option value={country.code}>{country.name}</option>
                )
            }
        </select>
        <label>
            fetchPolicies
        </label>
        <select onChange={onChangeFetchPolicy} value={fetchPolicy}>
            {fetchPolicies.map((policy) => <option value={policy}> {policy}</option>)}
        </select>
    </>)

}

export default CountrySelectPolicy