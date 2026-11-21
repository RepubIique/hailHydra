import React from 'react'
import '../styles/productPage.css'

/* Columns of the 4140/709 mechanical-properties matrix */
const MATRIX_COLUMNS = [
    ['rulingSection_mm', 'Section (mm)'],
    ['tensileStrength_Mpa', 'Tensile (MPa)'],
    ['yieldStrength_Mpa', 'Yield (MPa)'],
    ['elongation_percent', 'Elong. (%)'],
    ['izodImpact_J', 'Izod (J)'],
    ['charpyImpact_J', 'Charpy (J)'],
    ['hardnessBrinell_HB', 'Hardness (HB)'],
]

/** "rulingSection_mm" -> "Ruling section mm", "postWeldTreatment" -> "Post weld treatment" */
const humanize = (key) =>
    key
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .trim()
        .replace(/^./, (character) => character.toUpperCase())

/** Values are either a scalar or a {min,max} range object. */
const formatValue = (value) => {
    if (value === null || value === undefined) return '—'
    if (typeof value === 'object') {
        if (value.max !== undefined) return `${value.min}–${value.max}`
        if (value.min !== undefined) return `${value.min}`
        return Object.values(value).join(' / ')
    }
    return `${value}`
}

const KeyValueTable = ({ entries }) => (
    <table className="spec-table">
        <tbody>
            {entries.map(([key, value]) => (
                <tr key={key}>
                    <th scope="row">{humanize(key)}</th>
                    <td>{formatValue(value)}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

const Panel = ({ title, children }) =>
    title ? (
        <section className="spec-panel">
            <h3>{title}</h3>
            {children}
        </section>
    ) : null

export const ProductPage = ({ variant }) => {
    if (!variant) return null

    const {
        name,
        image,
        overview,
        keyFeatures,
        chemicalComposition,
        mechanicalProperties,
        mechanicalPropertiesTable,
        hardChromePlating,
        heatTreatment,
        commonApplication,
        relatedSpecifications,
        availability,
        others,
        conclusion,
    } = variant

    return (
        <div className="product-detail">
            <div className="product-detail__top">
                <div className="product-detail__media">
                    <img src={image} alt={name} loading="lazy" />
                </div>

                <div>
                    {overview && (
                        <Panel title="Overview">
                            <p className="spec-panel__text">{overview}</p>
                        </Panel>
                    )}

                    {commonApplication && (
                        <Panel title="Common applications">
                            <ul className="spec-list">
                                {commonApplication.map((entry, index) => (
                                    <li key={`${entry}-${index}`}>{entry}</li>
                                ))}
                            </ul>
                        </Panel>
                    )}

                    {keyFeatures && (
                        <Panel title="Key features">
                            <div className="feature-grid">
                                {keyFeatures.map((feature, index) => (
                                    <div
                                        className="feature-item"
                                        key={`${feature.name}-${index}`}
                                    >
                                        <strong>{feature.name}</strong>
                                        <span>{feature.description}</span>
                                    </div>
                                ))}
                            </div>
                        </Panel>
                    )}

                    {chemicalComposition && (
                        <Panel title="Chemical composition">
                            <KeyValueTable
                                entries={Object.entries(chemicalComposition)}
                            />
                        </Panel>
                    )}

                    {mechanicalProperties && (
                        <Panel title="Mechanical properties">
                            <KeyValueTable
                                entries={Object.entries(mechanicalProperties)}
                            />
                        </Panel>
                    )}

                    {/* 4140/709 ships a condition matrix instead of a flat map */}
                    {mechanicalPropertiesTable && (
                        <Panel title="Mechanical properties by condition">
                            <div className="table-scroll">
                                <table className="spec-table spec-table--matrix">
                                    <thead>
                                        <tr>
                                            <th scope="col">Condition</th>
                                            {MATRIX_COLUMNS.map(
                                                ([key, label]) => (
                                                    <th scope="col" key={key}>
                                                        {label}
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mechanicalPropertiesTable.map(
                                            (row, index) => (
                                                <tr
                                                    key={`${row.condition}-${index}`}
                                                >
                                                    <th scope="row">
                                                        {row.condition}
                                                    </th>
                                                    {MATRIX_COLUMNS.map(
                                                        ([key]) => (
                                                            <td key={key}>
                                                                {formatValue(
                                                                    row[key]
                                                                )}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </Panel>
                    )}

                    {hardChromePlating && (
                        <Panel title="Hard chrome plating">
                            <KeyValueTable
                                entries={Object.entries(hardChromePlating)}
                            />
                        </Panel>
                    )}

                    {relatedSpecifications && (
                        <Panel title="Related specifications">
                            <KeyValueTable
                                entries={Object.entries(relatedSpecifications)}
                            />
                        </Panel>
                    )}

                    {heatTreatment && (
                        <Panel title="Heat treatment">
                            <div className="process-grid">
                                {Object.entries(heatTreatment).map(
                                    ([process, steps]) => (
                                        <article
                                            className="process-card"
                                            key={process}
                                        >
                                            <h4>{humanize(process)}</h4>
                                            <dl>
                                                {typeof steps === 'object' &&
                                                steps !== null ? (
                                                    Object.entries(steps).map(
                                                        ([key, value]) => (
                                                            <React.Fragment
                                                                key={key}
                                                            >
                                                                <dt>
                                                                    {humanize(
                                                                        key
                                                                    )}
                                                                </dt>
                                                                <dd>
                                                                    {
                                                                        value
                                                                    }
                                                                </dd>
                                                            </React.Fragment>
                                                        )
                                                    )
                                                ) : (
                                                    <dd>{steps}</dd>
                                                )}
                                            </dl>
                                        </article>
                                    )
                                )}
                            </div>
                        </Panel>
                    )}

                    {others && (
                        <>
                            {Object.entries(others).map(([key, value]) => (
                                <Panel title={humanize(key)} key={key}>
                                    <p className="spec-panel__text">{value}</p>
                                </Panel>
                            ))}
                        </>
                    )}

                    {availability && (
                        <Panel title="Availability">
                            <p className="spec-panel__text">{availability}</p>
                        </Panel>
                    )}

                    {conclusion && (
                        <Panel title="Summary">
                            <p className="spec-panel__text">{conclusion}</p>
                        </Panel>
                    )}
                </div>
            </div>
        </div>
    )
}
