import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});


function ControlPanel( {classes, data }) {
  

  console.log(data)

  function clean(id) {
    if (window.confirm('Are you sure you want to remove this item?')) {

      fetch(`/del/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)})
    }
  }

  return (
    <>
      {/* <div className='container'>

      <div className='list'>
        {data?.map((item) => (
          <div className='item' key={item.id}>
            <span className='item-name'>{item.pollingStation}</span>
            <button
              className='delete-button'
              onClick={() => clean(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div> */}


      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>County</TableCell>
              <TableCell numeric className={classes.tableCell}>Polling Station</TableCell>
              <TableCell numeric className={classes.tableCell}>Votes</TableCell>
              <TableCell numeric className={classes.tableCell}>Delete</TableCell>
            {/* <TableCell numeric className={classes.tableCell}>Protein (g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map(record => {
              return (
                <TableRow key={record.id}>
                  <TableCell component="th" scope="row" className={classes.TableCell}>
                    {record.county}
                  </TableCell>
                  {/* <TableCell numeric className={classes.tableCell}>{record.county}</TableCell> */}
                  <TableCell numeric className={classes.tableCell}>{record.pollingStation}</TableCell>
                  <TableCell numeric className={classes.tableCell}>{record.votes}</TableCell>
                  <button
                    className='delete-button'
                    onClick={() => clean(record.id)}
                  >
                    X
                  </button>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

    </>
  )
}

ControlPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlPanel);