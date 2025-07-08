package com.example.RestJobApp.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
//This is Aspect
public class LoggingAspect {

    public static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);
// @After is an Advice and ("execution(* com.example.RestJobApp.service.JobService.getAlljobs(..))")
//    is Pointcut
    //syntax for execution----->    return type, class name, method name, args
    @Before("execution(* com.example.RestJobApp.service.JobService.*(..))")
    public void logMethodCall(JoinPoint joinPoint){
        LOGGER.info("Method called : " + joinPoint.getSignature().getName());
    }

// Multiple point cut can be used by || and execution/point cut
    @After("execution(* com.example.RestJobApp.service.JobService.getAlljobs(..)) || execution(* com.example.RestJobApp.service.JobService.getjob(..))")
    public void logMethodExecuted(JoinPoint joinPoint){
        LOGGER.info("Method Executed is : " + joinPoint.getSignature().getName());
    }

    @AfterThrowing("execution(* com.example.RestJobApp.service.JobService.getAlljobs(..)) || execution(* com.example.RestJobApp.service.JobService.getjob(..))")
    public void logMethodError(JoinPoint joinPoint){
        LOGGER.info("Method Error : {}", joinPoint.getSignature().getName());
    }




}
