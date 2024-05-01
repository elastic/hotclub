import React from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageHeader,
  EuiSpacer
} from "@elastic/eui";

export const QueryRulesView = () => {

  return (
    <>
      <EuiPageHeader
        pageTitle='Query Rules'
        description='Create and manage your query rules'
        rightSideItems={[
          <EuiButton
            iconSide='left'
            iconType='plusInCircle'
            fill
          >
            Create
          </EuiButton>,
          <EuiButtonEmpty
            iconSide='left'
            iconType='help'
          >
            Documentation
          </EuiButtonEmpty>
        ]}
        bottomBorder
      />
      <EuiSpacer />

      <EuiFlexGroup gutterSize="none">
        <EuiFlexItem>
          This is the left list
        </EuiFlexItem>

        <EuiFlexItem grow={3}>
          This is where the main pane
        </EuiFlexItem>

      </EuiFlexGroup>
    </>
  )
}
