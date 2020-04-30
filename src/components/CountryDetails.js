import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_COUNTRY from '../graphql/queries/GET_COUNTRY.graphql'
import SELECTED_COUNTRY from '../graphql/queries/SELECTED_COUNTRY.graphql'

const CountryDetails = () => {
    const { data: { countrySelected: code } = {} } = useQuery(SELECTED_COUNTRY)
    const { data, loading, error } = useQuery(GET_COUNTRY, { variables: { code } })
    if (!code) {
        return <h3> Select a Country</h3>
    }
    if (loading) { return <h3>Loading</h3> }
    if (error) { return <h3> Error: {error}</h3> }
    const { name,
        capital,
        native,
        emoji,
        currency, 
        findArepa } = data.country
    return (<>
        <h3>{name}</h3>
        <h4>Capital: {capital}</h4>
        <h4>Native: {native}</h4>
        <h4>Emoji: {emoji}</h4>
        <h4>Currency: {currency}</h4>
        {
            findArepa && <h1 style={{color: 'red'}}>Arepa finded</h1>
        }
    </>)
}

export default CountryDetails