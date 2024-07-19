package com.springboot.authentication.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfiguration{

	  @Autowired
	    private UserDetailsService userDetailsService;

	    @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	    }

	    @Bean
	    public DaoAuthenticationProvider authenticationProvider() {
	    	DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
			
	    	return auth;
	    }
	    
	    protected void configure(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	            .authorizeRequests()
	            .requestMatchers("/login").permitAll()
	            .anyRequest().authenticated()
	            .and()
	            .formLogin()
	            .loginPage("/Login")
	            .permitAll()
	            .and()
	            .logout()
	            .invalidateHttpSession(true)
	            .clearAuthentication(true)
	            .logoutRequestMatcher(new AntPathRequestMatcher("/Logout"))
	            .logoutSuccessUrl("/Login?Logout")
	            .permitAll();
	    }
}