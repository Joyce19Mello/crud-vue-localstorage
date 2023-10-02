import java.util.ArrayList;
import java.util.List;

public class Oferta {
    private Long codigoProduto;
    private double valorMaximo;
    private double valorMinimo;
    private int parcelaMax;
    private int parcelaMin;
    private int carenciaMax;
    private int carenciaMin;

    public Oferta(Long codigoProduto, double valorMaximo, double valorMinimo, int parcelaMax, int parcelaMin, int carenciaMax, int carenciaMin) {
        this.codigoProduto = codigoProduto;
        this.valorMaximo = valorMaximo;
        this.valorMinimo = valorMinimo;
        this.parcelaMax = parcelaMax;
        this.parcelaMin = parcelaMin;
        this.carenciaMax = carenciaMax;
        this.carenciaMin = carenciaMin;
    }

    public Long getCodigoProduto() {
        return codigoProduto;
    }

    public double getValorMaximo() {
        return valorMaximo;
    }

    public double getValorMinimo() {
        return valorMinimo;
    }

    public int getParcelaMax() {
        return parcelaMax;
    }

    public int getParcelaMin() {
        return parcelaMin;
    }

    public int getCarenciaMax() {
        return carenciaMax;
    }

    public int getCarenciaMin() {
        return carenciaMin;
    }

    public static void main(String[] args) {
        long startTime = System.nanoTime();

        List<Oferta> ofertas = new ArrayList<>();

        ofertas.add(new Oferta(12L, 5000.0, 100.0, 2, 3, 5, 0));
        ofertas.add(new Oferta(null, 400.0, 10.0, 1, 2, 4, 1));
        
        if (ofertas == null || ofertas.isEmpty()) {
          new Oferta(null, 0.0, 0.0, 0, 0, 0, 0);
        }

        Oferta resultado = encontrarValoresMaximosMinimos(ofertas);

        long endTime = System.nanoTime();

        long duration = (endTime - startTime) / 1000000;

        System.out.println(duration);
        
        System.out.println("valores");

        System.out.println(resultado.getValorMaximo());
        System.out.println(resultado.getValorMinimo());
        System.out.println(resultado.getParcelaMax());
        System.out.println(resultado.getParcelaMin());
        System.out.println(resultado.getCarenciaMax());
        System.out.println(resultado.getCarenciaMin());
        
    }

    public static Oferta encontrarValoresMaximosMinimos(List<Oferta> ofertas) {
      return ofertas.parallelStream()
              .filter(produto -> produto.getCodigoProduto() != null)
              .reduce(new Oferta(Long.MIN_VALUE, Double.MIN_VALUE, Double.MAX_VALUE, Integer.MIN_VALUE, Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.MAX_VALUE),
                      (acumulado, produto) -> new Oferta(
                            12L,
                              Math.max(acumulado.getValorMaximo(), produto.getValorMaximo()),
                              Math.min(acumulado.getValorMinimo(), produto.getValorMinimo()),
                              Math.max(acumulado.getParcelaMax(), produto.getParcelaMax()),
                              Math.min(acumulado.getParcelaMin(), produto.getParcelaMin()),
                              Math.max(acumulado.getCarenciaMax(), produto.getCarenciaMax()),
                              Math.min(acumulado.getCarenciaMin(), produto.getCarenciaMin())
                      ));
    }
}
