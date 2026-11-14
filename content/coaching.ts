export const plans = [
  {id: 'trimestral', name: 'Trimestral', months: 3, monthlyCents: 10990, totalCents: 32970, description: 'Um começo com direção.'},
  {id: 'semestral', name: 'Semestral', months: 6, monthlyCents: 9990, totalCents: 59940, description: 'Tempo para construir constância.'},
  {id: 'anual', name: 'Anual', months: 12, monthlyCents: 8990, totalCents: 107880, description: 'Acompanhamento para ir além.'},
] as const;
export type PlanId = typeof plans[number]['id'];
export type Plan = typeof plans[number];
export const currency = (cents: number) => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(cents / 100);
export const questions = [
  {title: 'Qual é o seu principal objetivo?', label: 'Meu principal objetivo', options: ['Ganhar massa muscular', 'Emagrecer com saúde', 'Definir o corpo', 'Melhorar condicionamento']},
  {title: 'O que mais está dificultando seu resultado?', label: 'Minha maior dificuldade', options: ['Falta de constância', 'Falta de uma estratégia adaptada', 'Falta de acompanhamento', 'Falta de motivação']},
  {title: 'Há quanto tempo tenta resolver isso?', label: 'Há quanto tempo tento resolver isso', options: ['Há poucas semanas', 'Há alguns meses', 'Há mais de um ano', 'Há muitos anos']},
  {title: 'Já teve acompanhamento profissional?', label: 'Acompanhamento anterior', options: ['Nunca tive', 'Já tive, mas não funcionou', 'Tenho atualmente', 'Faz tempo que não tenho']},
  {title: 'Quanto isso incomoda atualmente?', label: 'Quanto isso me incomoda', options: ['Pouco', 'Moderadamente', 'Bastante', 'Muito']},
  {title: 'Quando gostaria de começar?', label: 'Quando quero começar', options: ['Imediatamente', 'Nos próximos 30 dias', 'Em até 3 meses', 'Ainda estou pensando']},
] as const;
export type Person = { name: string; age: string; height: string; weight: string };
export function makeMessage(plan: Plan, person: Person, answers: string[]) {
  return ['Olá, Felipe! Gostaria de saber mais sobre a consultoria Black Edition.', '', `Plano escolhido: ${plan.name}`, `Duração: ${plan.months} meses`, `Valor total informado: ${currency(plan.totalCents)}`, `Equivalente mensal informado: ${currency(plan.monthlyCents)}`, '', `Nome: ${person.name.trim()}`, `Idade: ${person.age} anos`, `Altura: ${person.height} cm`, ...(person.weight ? [`Peso: ${person.weight} kg`] : []), '', ...questions.map((question, i) => `${question.label}: ${answers[i]}`), '', 'Gostaria de conversar sobre os próximos passos.'].join('\n');
}
export const whatsappUrl = (message: string) => `https://wa.me/556291393319?text=${encodeURIComponent(message)}`;
