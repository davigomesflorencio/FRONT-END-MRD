import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function searching(term){
    return function(x){
        return x.cliente.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class SubstituirAdvogado extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //   inicializa a lista de processo com uma lista estática
            // Essa parte deve ser alterada para pegar no banco
            processes: [{ processo: 1, cliente: "a" }, { processo: 2, cliente: "b" }, { processo: 3, cliente: "c" }],
            term: '',
        }

        //   Define o contexto de setProcesses
        this.setProcesses = this.setProcesses.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    // Metodo que captura o termo que será feita a busca
    searchHandler(event){
        this.setState({term: event.target.value});
    }
    // Metodo referente ao alterar o advogado
    editAdvogado(processo) {

    }

    //   Metodo para setar o valor de processes no state
    setProcesses(processes) {
        this.setState({ processes });
    }

    render() {
        const {term, processes} = this.state;
        return (
            <div>
                {/* Menu de navegação */}
                <Navbar />
                {/* Renderiza o titulo da página */}
                <Typography variant="h4" style={style}>LISTA DE PROCESSOS</Typography><br />
                <form>
                    <input type="text" class="form-control" id="examplesearchFilter" value={term}
                    placeholder="Pesquisar pelo nome do cliente" onChange={this.searchHandler} />
                </form>
                {/* constrói uma tabela com a identifiação do processo, o cliente associado ao processo
                  e um opção para alterar o advogado do processo*/}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Processo</TableCell>
                            <TableCell>Cliente</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processes.filter(searching(term)).map(row => (
                            <TableRow key={row.processo}>
                                <TableCell component="th" scope="row">
                                    {row.processo}
                                </TableCell>
                                <TableCell>{row.cliente}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(row.processo)}><CreateIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

// estilização utilizada pelo Typography
const style = {
    display: 'flex',
    justifyContent: 'center'
}

// exportando o componente SubstituirAdvogado
export default SubstituirAdvogado;