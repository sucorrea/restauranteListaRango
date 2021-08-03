import { IHour, IDay } from '../../../../Types';

const DisponibilidadeRestaurante = (horarios: IHour[]) => {
  const dataAtual = new Date();
  let conferirDia = false;
  let disponiblidade = false;
  let horaAbre = 0;
  let horaFecha = 0;
  let minutoAbre = 0;
  let minutoFecha = 0;
  let horarioAbertura = new Date();
  let horarioFechamento = new Date();

  horarios.forEach((horario) => {
    conferirDia = horario.days.indexOf((dataAtual.getDay() + 1) as IDay) >= 0;
    if (conferirDia) {
      horaAbre = Number(horario.from.substring(0, 2));
      minutoAbre = Number(horario.from.substring(3, 5));
      horarioAbertura = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        dataAtual.getDate(),
        horaAbre,
        minutoAbre,
      );

      horaFecha = Number(horario.to.substring(0, 2));
      minutoFecha = Number(horario.to.substring(3, 5));
      horarioFechamento = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        dataAtual.getDate(),
        horaFecha,
        minutoFecha,
      );
      if (dataAtual > horarioAbertura && dataAtual < horarioFechamento) {
        disponiblidade = true;
      }
    }
  });
  return disponiblidade ? 'Aberto' : 'Fechado';
};

export { DisponibilidadeRestaurante };
