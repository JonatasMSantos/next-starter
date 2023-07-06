Anotations:

Uma dica, quando estender as props de um componente, tem um type helper do React chamado ComponentProps. Dá pra extender tantos elementos HTML quanto componentes customizados.
Ficaria assim:
interface NotificationActionProps extends ComponentProps<"button"> {}

E para custom components:
interface SomeComponentProps extends ComponentProps<typeof YourComponent>


##lint all files
npm lint -- --fix