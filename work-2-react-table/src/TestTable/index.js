import Table from 'react-bootstrap/Table'

export default function TestTable() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colspan="2"></th>
            <th></th>
            <th></th>
            <th colspan="2"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="2"></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2" rowspan="2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowspan="4"></td>
          </tr>
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
