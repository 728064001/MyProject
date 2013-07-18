
public class test {
	public static void main(String[] args) {
//	     调用公历历日期转换农历日期方法 
        System.out.println(Lunar.sCalendarSolarToLundar(2012, 4, 9));
//     调用农历日期转换公历日期方法 
        System.out.println(Lunar.sCalendarLundarToSolar(1991, 5, 11));
    }
}
