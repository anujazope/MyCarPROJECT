package com.test.testrest;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("cars")
public class Cars {

	@GET
	@Path("economy")
	@Produces("application/json")
	public String getEconomy() throws JsonProcessingException {
		List<Car> l = new Dao().getEconomy();

		if (l.size() == 0)
			return "[]";
		else
			return new ObjectMapper().writeValueAsString(l);
	}

	@GET
	@Path("budget")
	@Produces("application/json")
	public String getBudget() throws JsonProcessingException {
		List<Car> l = new Dao().getBudget();

		if (l.size() == 0)
			return "[]";
		else
			return new ObjectMapper().writeValueAsString(l);
	}

	@GET
	@Path("midrange")
	@Produces("application/json")
	public String getMidRange() throws JsonProcessingException {
		List<Car> l = new Dao().getMidrange();

		if (l.size() == 0)
			return "[]";
		else
			return new ObjectMapper().writeValueAsString(l);
	}

	@GET
	@Path("luxury")
	@Produces("application/json")
	public String getLuxury() throws JsonProcessingException {
		List<Car> l = new Dao().getLuxury();

		if (l.size() == 0)
			return "[]";
		else
			return new ObjectMapper().writeValueAsString(l);
	}
}
