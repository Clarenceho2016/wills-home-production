import React from 'react'
import PropTypes from 'prop-types'
import { TCPageTemplate } from '../../templates/tc-page'

const TCPagePreview = ({ entry, widgetFor }) => (
    <TCPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

TCPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TCPagePreview
