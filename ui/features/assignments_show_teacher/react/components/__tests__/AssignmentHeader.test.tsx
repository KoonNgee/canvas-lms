/*
 * Copyright (C) 2024 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {render} from '@testing-library/react'
import {mockAssignment} from '../../test-utils'
import AssignmentHeader from '../AssignmentHeader'

describe('assignment enhancement teacher view header', () => {
  it('renders assignment name', () => {
    const assignment = mockAssignment()
    const getByTestId = render(<AssignmentHeader assignment={assignment} />).getByTestId
    expect(getByTestId('assignment-name')).toBeInTheDocument()
    expect(getByTestId('assignment-name')).toHaveTextContent(assignment.name)
  })

  it('renders assignment status pill', () => {
    const assignment = mockAssignment()
    const getByTestId1 = render(<AssignmentHeader assignment={assignment} />).getByTestId
    expect(() => getByTestId1('assignment-status-pill')).toThrow()
    assignment.hasSubmittedSubmissions = true
    const getByTestId2 = render(<AssignmentHeader assignment={assignment} />).getByTestId
    expect(getByTestId2('assignment-status-pill')).toBeInTheDocument()
  })
})
