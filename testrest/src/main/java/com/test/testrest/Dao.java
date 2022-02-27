package com.test.testrest;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Dao {
	Configuration con;
	
	public Dao() {		
		con = new Configuration().configure("hibernate.cfg.xml");
	}
	
	
	//get all economy cars rule of economy car is price is less than 5 lac
	public List<Car> getEconomy(){
		List<Car> cars = new ArrayList<Car>();
		
		try {
			SessionFactory sf = con.addAnnotatedClass(Car.class).buildSessionFactory();
			Session s = sf.openSession();
			s.beginTransaction();
			
			cars = (List<Car>) s.createQuery("from Car where min_cost <= 500000 or max_cost <= 500000").getResultList();
			
			s.getTransaction().commit();
			s.close();
			sf.close();
			return cars;
		} catch (Exception e) {
			e.printStackTrace();
			return cars;
		}
	}
	
	
	//get budget cars rule price is greater than 5 lac and less than 10lac
	public List<Car> getBudget(){
		List<Car> cars = new ArrayList<Car>();
		
		try {
			SessionFactory sf = con.addAnnotatedClass(Car.class).buildSessionFactory();
			Session s = sf.openSession();
			s.beginTransaction();
			
			cars = (List<Car>) s.createQuery("from Car where (min_cost > 500000 or max_cost > 500000 ) and (min_cost <= 1000000 or max_cost <= 1000000)").getResultList();
			
			s.getTransaction().commit();
			s.close();
			sf.close();
			return cars;
		} catch (Exception e) {
			e.printStackTrace();
			return cars;
		}
	}
	
	
	//get mid range cars rule price is greate than 10lc and less than 15 lac
	public List<Car> getMidrange(){
		List<Car> cars = new ArrayList<Car>();
		
		try {
			SessionFactory sf = con.addAnnotatedClass(Car.class).buildSessionFactory();
			Session s = sf.openSession();
			s.beginTransaction();
			
			cars = (List<Car>) s.createQuery("from Car where (min_cost > 1000000 or max_cost > 1000000 ) and (min_cost <= 1500000 or max_cost <= 1500000)").getResultList();
			
			s.getTransaction().commit();
			s.close();
			sf.close();
			return cars;
		} catch (Exception e) {
			e.printStackTrace();
			return cars;
		}
	}
	
	
	//get luxury cars rule price is greater than 15lac
	public List<Car> getLuxury(){
		List<Car> cars = new ArrayList<Car>();
		
		try {
			SessionFactory sf = con.addAnnotatedClass(Car.class).buildSessionFactory();
			Session s = sf.openSession();
			s.beginTransaction();
			
			cars = (List<Car>) s.createQuery("from Car where (min_cost > 1500000 or max_cost > 1500000 )").getResultList();
			
			s.getTransaction().commit();
			s.close();
			sf.close();
			return cars;
		} catch (Exception e) {
			e.printStackTrace();
			return cars;
		}
	}
	
	
	public static void main(String[] args) throws JsonProcessingException {
//		SessionFactory sf = new Dao().con.addAnnotatedClass(Car.class).buildSessionFactory();
//		Session s = sf.openSession();
//		s.beginTransaction();
//		
//		
//		
//		s.getTransaction().commit();
//		s.close();
//		sf.close();
		
		for(Car c : new Dao().getLuxury()) {
			System.out.println(c.min_cost+" "+c.max_cost);
		}
	}
}
