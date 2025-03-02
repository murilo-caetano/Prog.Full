Poligono = input("Você deseja calcular o volume do dodecaedro ou icosaedro: ")
aresta = float(input("Digite o valor da aresta a em metros: "))
if Poligono == "dodecaedro":
  print(f"O volume de um dodecaedro regular com {aresta:.2f} de aresta é: {((15+7*2.23606)/4)*aresta**3:.2f}")
if Poligono == "icosaedro":
  print(f"O volume de um icosaedro regular com {aresta:.2f} de aresta é: {(5/12)*(3+2.23606)*aresta**3:.2f}")